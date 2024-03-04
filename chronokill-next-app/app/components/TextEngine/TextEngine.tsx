'use client'

import { MouseEvent, useEffect, useState } from "react"
import { StaticImageData } from 'next/image'

import { test_script, test_script_answers } from "../../scripts/test_script"
import { ActionTypes } from '../../constants'
import { 
  TextPanel, 
  DecisionModal, 
  CharacterPanel,
  BackgroundImage,
  EndGamePopup
} from './components'
import { 
  SetScriptStep, 
  SetSceneCharacters,
  AudioService,
  KeyboardEventHandler,
  MouseEventHandler
} from './services'
import { 
  SceneBackground,
  SceneCharacter, 
  ScriptStep 
} from '../../interfaces'
import { 
  ActionImageArray, 
  ActionCharacterArray, 
  ActionDecisionArray, 
  DecisionSelection, 
  ActionCheckArray, 
  CheckFunction, 
  ActionSfxArray,
  ActionScriptArray,
  SceneScript
} from "../../types"

import styles from './styles.module.css'

//formally Ehhngine
export const TextEngine = () => {
  // TODO: Change this to a useReducer.
  const [scriptStep, setScriptStep] = useState<ScriptStep>({ step: 0, check: undefined })
  const [script, setScript] = useState<SceneScript>([])
  const [scriptAnswers, setScriptAnswers] = useState<any>({})

  const [sceneText, setSceneText] = useState<string>("")
  const [sceneBackground, setSceneBackground] = useState<SceneBackground>(undefined)
  const [sceneCharacters, setSceneCharacters] = useState<SceneCharacter[]>([])
  const [sceneDecision, setSceneDecision] = useState<DecisionSelection>([])
  const [sceneName, setSceneName] = useState<SceneCharacter>()

  const [isTextRendering, setIsTextRendering] = useState<boolean>(false)
  const [isSkippingTextRendering, setIsSkippingTextRendering] = useState<boolean>(false)
  const [isShowingOverlay, setIsShowingOverlay] = useState<boolean>(true)

  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const [popupMessage, setPopupMessage] = useState('')
  
  const UserEventListener = (event: KeyboardEvent | MouseEvent<HTMLDivElement>) => {
    if (isPopupVisible) {
      return
    }
    
    if (isTextRendering) {
      setIsSkippingTextRendering(true)
      return
    }

    const disable = sceneDecision.length > 0

    if (event instanceof KeyboardEvent) {
      KeyboardEventHandler(setScriptStep, event, disable)
    } else {
      MouseEventHandler(setScriptStep, event, disable)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', UserEventListener)

    return () => {
      window.removeEventListener('keydown', UserEventListener)
    }
  }, [sceneDecision, isTextRendering])

  useEffect(() => {
    if (script.length === 0 && Object.keys(scriptAnswers).length === 0) {
      setScript(test_script)
      setScriptAnswers(test_script_answers)
      setScriptStep({ step: 0, check: undefined })
    }
  }, [])

  useEffect(() => {
    if (script.length === 0) return

    const currentScriptStep = script[scriptStep.step]
    
    if (Array.isArray(currentScriptStep)) {
      switch (currentScriptStep[0]) {
        case ActionTypes.bg:
          const actionImageArray: ActionImageArray = currentScriptStep as ActionImageArray
          const backgroundImageData: StaticImageData = actionImageArray[1]

          if (!backgroundImageData) {
            setIsShowingOverlay(true)
          } else {
            setSceneBackground(backgroundImageData)
            setIsShowingOverlay(false)
          }

          SetScriptStep(setScriptStep, "increment")
          break
        case ActionTypes.char:
        case ActionTypes.echar:
        case ActionTypes.rchar:
          const actionCharacterArray: ActionCharacterArray = currentScriptStep as ActionCharacterArray
          SetSceneCharacters(setSceneCharacters, currentScriptStep[0], actionCharacterArray)
          SetScriptStep(setScriptStep, "increment")
          break
        case ActionTypes.qa:
          const actionDecisionArray: ActionDecisionArray = currentScriptStep as ActionDecisionArray
          const decisionChoices: DecisionSelection = actionDecisionArray.slice(1) as DecisionSelection
          setSceneDecision(decisionChoices)
          break
        case ActionTypes.check:
          const actionCheckArray: ActionCheckArray = currentScriptStep as ActionCheckArray
          const checkFunction: CheckFunction = actionCheckArray[1] as CheckFunction
          SetScriptStep(setScriptStep, "check", undefined, checkFunction)
          break
        case ActionTypes.rcheck:
          SetScriptStep(setScriptStep, "rcheck")
          break
        case ActionTypes.sfx:
          const actionSfxArray: ActionSfxArray = currentScriptStep as ActionSfxArray
          AudioService(`/sfx/${actionSfxArray[1]}`)
          SetScriptStep(setScriptStep, "increment")
          break
        case ActionTypes.script:
          const actionScriptArray: ActionScriptArray = currentScriptStep as ActionScriptArray
          setIsShowingOverlay(true)
          setScript(actionScriptArray[1])
          setScriptAnswers(actionScriptArray[2])
          SetScriptStep(setScriptStep, "reset")
          SetSceneCharacters(setSceneCharacters, "clear")
          break
        case ActionTypes.name:
          const actionNameArray: ActionCharacterArray = currentScriptStep as ActionCharacterArray
          setSceneName(actionNameArray[1])
          SetScriptStep(setScriptStep, "increment")
          break
        case ActionTypes.endgame:
          setPopupMessage(currentScriptStep[1])
          setIsPopupVisible(true)
          break
        default:
          //This is to skip actions that don't exist either because of a typo or not removed from script.
          SetScriptStep(setScriptStep, "increment")
          break
      }
    } else {
      // TODO: conditional rendering only works for text.
      // Wrap this whole useEffect to check for conditional rendering.
      // make sure rcheck can still be called
      if (!scriptStep.check || scriptStep.check()) {
        setSceneText(currentScriptStep)
      } else {
        SetScriptStep(setScriptStep, "increment")
      }
    }
  }, [scriptStep])

  return (
    <div className={styles.textEngineWrapper} onClick={UserEventListener} >
      <div className={styles.backgroundWrapper}>
        <BackgroundImage sceneBackground={sceneBackground} isShowingOverlay={isShowingOverlay} />
      </div>
      <div className={styles.textPanelWrapper}>
        <TextPanel 
          displayText={sceneText} 
          isSkippingTextRendering={isSkippingTextRendering} 
          setIsTextRendering={setIsTextRendering}
          setIsSkippingTextRendering={setIsSkippingTextRendering}
          sceneName={sceneName}
        />
      </div>
      <CharacterPanel sceneCharacters={sceneCharacters} />
      <DecisionModal
        sceneDecision={sceneDecision}
        setSceneDecision={setSceneDecision}
        sceneText={sceneText}
        scriptAnswers={scriptAnswers}
        setScriptStep={setScriptStep}
      />
      <EndGamePopup
        isVisible={isPopupVisible}
        onClose={() => setIsPopupVisible(false)}
        message={popupMessage}
      />
    </div>
  )
}

export default TextEngine