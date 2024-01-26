'use client'

import { useEffect, useMemo, useState } from "react"
import Image from 'next/image'

import { TextPanel, Character, DecisionModal } from './components'
import { test_script, test_script_answers } from "../../scripts/test_script"
import { UserEvents, SetScriptStep, SetSceneBackground, SetSceneCharacters} from './services'
import { SceneBackground, SceneCharacter, ScriptStep } from '../../interfaces'
import { ActionImageArray, ActionCharacterArray, ActionDecisionArray, DecisionSelection, ActionCheckArray, CheckFunction } from "../../types"

import default_background from '../../../public/placeholder_char.jpeg'
import styles from './styles.module.css'

//formally Ehhngine
export const TextEngine = () => {
  // TODO: Change this to a useReducer.
  const [scriptStep, setScriptStep] = useState<ScriptStep>({step: 0, direction: "forward", check: undefined, scene: undefined})
  const [sceneText, setSceneText] = useState<string>("")
  const [sceneBackground, setSceneBackground] = useState<SceneBackground>({ image: default_background })
  const [sceneCharacters, setSceneCharacters] = useState<SceneCharacter[]>([])
  const [sceneDecision, setSceneDecision] = useState<DecisionSelection>([])
  
  const UserEventHandler = (event: KeyboardEvent | MouseEvent) => {
    UserEvents(event, setScriptStep)
  }

  useEffect(() => {
    if (sceneDecision.length > 0) return
    // it's technically an unintended feature, but when you click a choice in a decision, the click counts as
    // a valid click for the UserEventHandler and therefore increments the SceneScript by 1
    // if we ever need it to not be like that, we'd need to fix that

    window.addEventListener('keydown', UserEventHandler)
    window.addEventListener('click', UserEventHandler)

    if (!scriptStep.scene) {
      SetScriptStep(setScriptStep, "scene", test_script)
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
          SetSceneCharacters(setSceneCharacters, actionCharacterArray, charType)
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
        default:
          //This is to skip actions that dont exist either because of a typo or not removed from script.
          SetScriptStep(setScriptStep, "increment")
          break
      }
    } else {
      if (!scriptStep.check) {
        setSceneText(currentScriptStep)
      } else {
        if (scriptStep.check()) {
          setSceneText(currentScriptStep)
        } else {
          SetScriptStep(setScriptStep, "increment")
        }
      }
    }
  }, [scriptStep])

  // TODO: See if we can get rid of this the same way as <DecisionModal />
  const characterElements = useMemo(() => {
    if (sceneCharacters.length === 0) return []

    const characterElements = []

    for (const sceneCharacter of sceneCharacters) {
      characterElements.push(
        <Character key={sceneCharacter.name} sceneCharacter={sceneCharacter} />
      )
    }

    return characterElements
  }, [sceneCharacters])

  // logs for the state
  // console.log(scriptStep)
  // console.log("Text Engine Characters: ", sceneCharacters)
  // console.log("Text Engine Background: ", sceneBackground)
  // console.log("Text Engine Text: ", sceneText)
  return (
    <div className={styles.textEngineWrapper}>
      <div className={styles.sceneWrapper}>
        <Image priority src={sceneBackground.image} className={styles.sceneBackground} alt="me"/>
      </div>
      <div className={styles.textPanelWrapper}>
        <TextPanel displayText={sceneText} />
      </div>
      {characterElements}
      <DecisionModal sceneDecision={sceneDecision} setSceneDecision={setSceneDecision} sceneText={sceneText} />
    </div>
  )
}

export default TextEngine