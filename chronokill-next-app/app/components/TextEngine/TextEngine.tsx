'use client'

import { MouseEvent, useCallback, useEffect, useRef, useState } from "react"
import { StaticImageData } from 'next/image'

import { 
  test_script, test_script_answers,
  monday_script, monday_script_answers,
  wednesday_script, wednesday_script_answers,
  thursday_script, thursday_script_answers
} from "../../scripts/"
import { ActionTypes } from '../../constants'
import { 
  TextPanel, 
  DecisionModal, 
  CharacterPanel,
  BackgroundImage,
  EndGamePopup
} from './components'
import {
  AudioService,
  SetScriptStep, 
  SetSceneCharacters,
  SFXService,
  StopAudioService,
  KeyboardEventHandler,
  MouseEventHandler
} from './services'
import { 
  MetaData,
  MetaDataDefault,
  SceneBackground,
  SceneCharacter
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
  SceneScript,
  ActionScoreArray
} from "../../types"

import styles from './styles.module.css'

//formally Ehhngine
export const TextEngine = () => {
  // alternative to localStorage for component lifetimes
  // unused after last score changes, but still has future use
  const metaData = useRef<MetaData>(MetaDataDefault)

  // TODO: Change this to a useReducer.
  const [scriptStep, setScriptStep] = useState<number>(0)
  const [script, setScript] = useState<SceneScript>(monday_script)
  const [scriptAnswers, setScriptAnswers] = useState<any>(monday_script_answers)
  const [scriptCheck, setScriptCheck] = useState<CheckFunction>(undefined)

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
  
  const UserEventListener = useCallback((event: KeyboardEvent | MouseEvent<HTMLDivElement>) => {
    if (isPopupVisible) return

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
  },[sceneDecision, isTextRendering, isPopupVisible])

  useEffect(() => {
    monday_script_answers.score = 0
    setScriptAnswers(monday_script_answers)
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', UserEventListener)

    return () => {
      window.removeEventListener('keydown', UserEventListener)
    }
  }, [UserEventListener])

  useEffect(() => {
    if (script.length === 0) return

    const currentScriptStep = script[scriptStep]

    //check actions that alter engine rendering
    if (Array.isArray(currentScriptStep)) {
      switch (currentScriptStep[0]) {
        case ActionTypes.check:
          const actionCheckArray: ActionCheckArray = currentScriptStep as ActionCheckArray
          const checkFunction: CheckFunction = actionCheckArray[1] as CheckFunction
          setScriptCheck(() => checkFunction)
          SetScriptStep(setScriptStep, "increment")
          return
        case ActionTypes.rcheck:
          setScriptCheck(undefined)
          SetScriptStep(setScriptStep, "increment")
          return
      }
    }

    // standard engine actions
    if (!scriptCheck || scriptCheck()) {
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
          case ActionTypes.sfx:
            const actionSfxArray: ActionSfxArray = currentScriptStep as ActionSfxArray
            const audioVolumeString = localStorage.getItem("volume");
            const audioVolume = audioVolumeString ? parseFloat(audioVolumeString) : 0.5;
            SFXService(`/sfx/${actionSfxArray[1]}`, audioVolume)
            SetScriptStep(setScriptStep, "increment")
            break
          case ActionTypes.script:
            const actionScriptArray: ActionScriptArray = currentScriptStep as ActionScriptArray
            const differentScriptAnswers = actionScriptArray[2]
            differentScriptAnswers.score = 0
            setIsShowingOverlay(true)
            setScript(actionScriptArray[1])
            setScriptAnswers(differentScriptAnswers)
            SetScriptStep(setScriptStep, "reset")
            SetSceneCharacters(setSceneCharacters, "clear")
            break
          case ActionTypes.name:
            const actionNameArray: ActionCharacterArray = currentScriptStep as ActionCharacterArray
            setSceneName(actionNameArray[1])
            SetScriptStep(setScriptStep, "increment")
            break
          case ActionTypes.score:
            const actionScoreArray: ActionScoreArray = currentScriptStep as ActionScoreArray
            const scoreToAdd = actionScoreArray[1]
            scriptAnswers["score"] += scoreToAdd
            SetScriptStep(setScriptStep, "increment")
            break
          case ActionTypes.endgame:
            const actionEndgameArray: ActionScoreArray = currentScriptStep as ActionScoreArray
            const endgameString = actionEndgameArray[1]
            setPopupMessage(`${endgameString} Score: ${scriptAnswers.score}`)
            setIsPopupVisible(true)
            break
          case ActionTypes.amb:
            const actionAmbArray: ActionSfxArray = currentScriptStep as ActionSfxArray
            const ambientVolumeString = localStorage.getItem("volume");
            const ambientVolume = ambientVolumeString ? parseFloat(ambientVolumeString) : 0.5
            AudioService(`/mp3/${actionAmbArray[1]}`, ambientVolume)
            SetScriptStep(setScriptStep, "increment")
            break
          case ActionTypes.ramb:
            StopAudioService()
            SetScriptStep(setScriptStep, "increment")
            break
          default:
            //This is to skip actions that don't exist either because of a typo or not removed from script.
            SetScriptStep(setScriptStep, "increment")
            break
          }
      } else {
        let replacedText = currentScriptStep as string
        const playerName = localStorage.getItem("playerName") ?? "Player"
        const score = scriptAnswers.score.toString()
        replacedText = replacedText.replace(/<Score>/g, score)
        replacedText = replacedText.replace(/<PlayerName>/g, playerName)
        
        setSceneText(replacedText)
      }
    } else {
      SetScriptStep(setScriptStep, "increment")
    }
  }, [script, scriptStep, scriptAnswers])

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
        message={popupMessage}
      />
    </div>
  )
}

export default TextEngine