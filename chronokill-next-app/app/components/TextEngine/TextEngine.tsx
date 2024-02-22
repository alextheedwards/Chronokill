'use client'

import { useEffect, useMemo, useState } from "react"
import Image from 'next/image'

import { test_script, test_script_answers } from "../../scripts/test_script"
import { 
  TextPanel, 
  DecisionModal, 
  CharacterPanel
} from './components'
import { 
  UserEvents, 
  SetScriptStep, 
  SetSceneBackground, 
  SetSceneCharacters,
  AudioService
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
  ActionScriptArray
} from "../../types"

import default_background from '../../../public/placeholder_char.jpeg'
import styles from './styles.module.css'

//formally Ehhngine
export const TextEngine = () => {
  // TODO: Change this to a useReducer.
  const [scriptStep, setScriptStep] = useState<ScriptStep>({ step: 0, direction: "forward", check: undefined, scene: undefined })
  const [scriptAnswers, setScriptAnswers] = useState()
  const [sceneText, setSceneText] = useState<string>("")
  const [sceneBackground, setSceneBackground] = useState<SceneBackground>({ image: default_background })
  const [sceneCharacters, setSceneCharacters] = useState<SceneCharacter[]>([])
  const [sceneDecision, setSceneDecision] = useState<DecisionSelection>([])

  const UserEventHandler = (event: KeyboardEvent | MouseEvent) => {
    UserEvents(event, setScriptStep)
  }

  useEffect(() => {
    // it's technically an unintended feature, but when you click a choice in a decision, the click counts as
    // a valid click for the UserEventHandler and therefore increments the SceneScript by 1
    // if we ever need it to not be like that, we'd need to fix that

    if (sceneDecision.length > 0) return

    window.addEventListener('keydown', UserEventHandler)
    window.addEventListener('click', UserEventHandler)

    if (!scriptStep.scene && !scriptAnswers) {
      SetScriptStep(setScriptStep, "scene", test_script)
      setScriptAnswers(test_script_answers)
    }

    return () => {
      window.removeEventListener('keydown', UserEventHandler)
      window.removeEventListener('click', UserEventHandler)
    }
  }, [sceneDecision])

  useEffect(() => {
    if (!scriptStep.scene) return

    const currentScriptStep = scriptStep.scene[scriptStep.step]

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
          SetScriptStep(setScriptStep, "scene", actionScriptArray[1])
          setScriptAnswers(actionScriptArray[2])
          SetSceneCharacters(setSceneCharacters, "clear")
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

  // logs for the state
  // console.log("Texst Engine Current Step: ", scriptStep)
  // console.log("Text Engine Characters: ", sceneCharacters)
  // console.log("Text Engine Background: ", sceneBackground)
  // console.log("Text Engine Text: ", sceneText)
  return (
    <div className={styles.textEngineWrapper}>
      <div className={styles.sceneWrapper}>
        <Image priority src={sceneBackground.image} className={styles.sceneBackground} alt="me" />
      </div>
      <div className={styles.textPanelWrapper}>
        <TextPanel displayText={sceneText} />
      </div>
      <CharacterPanel sceneCharacters={sceneCharacters} />
      <DecisionModal
        sceneDecision={sceneDecision}
        setSceneDecision={setSceneDecision}
        sceneText={sceneText}
        scriptAnswers={scriptAnswers}
      />
    </div>
  )
}

export default TextEngine