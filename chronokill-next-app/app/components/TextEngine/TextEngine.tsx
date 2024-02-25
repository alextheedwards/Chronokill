'use client'

import { MouseEvent, useEffect, useMemo, useState } from "react"
import Image from 'next/image'

import { test_script, test_script_answers } from "../../scripts/test_script"
import { 
  TextPanel, 
  DecisionModal, 
  CharacterPanel
} from './components'
import { 
  SetScriptStep, 
  SetSceneBackground, 
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

import default_background from '../../../public/placeholder_char.jpeg'
import styles from './styles.module.css'

//formally Ehhngine
export const TextEngine = () => {
  // TODO: Change this to a useReducer.
  const [scriptStep, setScriptStep] = useState<ScriptStep>({ step: 0, check: undefined })
  const [script, setScript] = useState<SceneScript>([])
  const [scriptAnswers, setScriptAnswers] = useState({})
  const [sceneText, setSceneText] = useState<string>("")
  const [sceneBackground, setSceneBackground] = useState<SceneBackground>({ image: default_background })
  const [sceneCharacters, setSceneCharacters] = useState<SceneCharacter[]>([])
  const [sceneDecision, setSceneDecision] = useState<DecisionSelection>([])
  const [isTextRendering, setIsTextRendering] = useState<boolean>(false)
  const [skipTextRendering, setSkipTextRendering] = useState<boolean>(false)
  
  const UserEventListener = (event: KeyboardEvent | MouseEvent<HTMLDivElement>) => {
    if (isTextRendering) {
      setSkipTextRendering(true)
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
        case "bg":
          const actionImageArray: ActionImageArray = currentScriptStep as ActionImageArray
          SetSceneBackground(setSceneBackground, actionImageArray)
          SetScriptStep(setScriptStep, "increment")
          break
        case "char":
        case "rchar":
          const actionCharacterArray: ActionCharacterArray = currentScriptStep as ActionCharacterArray
          const charType: string = currentScriptStep[0] === "char" ? "add" : "remove"
          SetSceneCharacters(setSceneCharacters, charType, actionCharacterArray)
          SetScriptStep(setScriptStep, "increment")
          break
        case "qa":
          const actionDecisionArray: ActionDecisionArray = currentScriptStep as ActionDecisionArray
          const decisionChoices: DecisionSelection = actionDecisionArray.slice(1) as DecisionSelection
          setSceneDecision(decisionChoices)
          break
        case "check":
          const actionCheckArray: ActionCheckArray = currentScriptStep as ActionCheckArray
          const checkFunction: CheckFunction = actionCheckArray[1] as CheckFunction
          SetScriptStep(setScriptStep, "check", undefined, checkFunction)
          break
        case "rcheck":
          SetScriptStep(setScriptStep, "rcheck")
          break
        case "sfx":
          const actionSfxArray: ActionSfxArray = currentScriptStep as ActionSfxArray
          AudioService(`/sfx/${actionSfxArray[1]}`)
          SetScriptStep(setScriptStep, "increment")
          break
        case "script":
          const actionScriptArray: ActionScriptArray = currentScriptStep as ActionScriptArray
          setScript(actionScriptArray[1])
          setScriptAnswers(actionScriptArray[2])
          SetScriptStep(setScriptStep, "reset")
          SetSceneCharacters(setSceneCharacters, "clear")
          break
        default:
          //This is to skip actions that dont exist either because of a typo or not removed from script.
          SetScriptStep(setScriptStep, "increment")
          break
      }
    } else {
      if (!scriptStep.check || scriptStep.check()) {
        setSceneText(currentScriptStep)
      } else {
        SetScriptStep(setScriptStep, "increment")
      }
    }
  }, [scriptStep])

  return (
    <div className={styles.textEngineWrapper} onClick={UserEventListener} >
      <div className={styles.sceneWrapper}>
        <Image priority src={sceneBackground.image} className={styles.sceneBackground} alt="me" />
      </div>
      <div className={styles.textPanelWrapper}>
        <TextPanel 
          displayText={sceneText} 
          skipTextRendering={skipTextRendering} 
          setIsTextRendering={setIsTextRendering}
          setSkipTextRendering={setSkipTextRendering}
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
    </div>
  )
}

export default TextEngine