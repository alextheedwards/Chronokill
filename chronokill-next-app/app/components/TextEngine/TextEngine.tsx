'use client'

import { useEffect, useMemo, useState } from "react"
import Image from 'next/image'

import { TextPanel, Character } from './components'
import { test_script } from "../../scripts/test_script"
import { UserEvents, SetScriptStep, SetSceneBackground, SetSceneCharacters} from './services'
import { SceneBackground, SceneCharacter, ScriptStep } from '../../interfaces'
import { ActionImageArray, ActionCharacterArray } from "../../types"

import default_background from '../../../public/placeholder_char.jpeg'
import styles from './styles.module.css'


//formally Ehhngine
export const TextEngine = () => {
  const [scriptStep, setScriptStep] = useState<ScriptStep>({step: 0, direction: "forward", scene: undefined})
  const [sceneText, setSceneText] = useState<string>("")
  const [sceneBackground, setSceneBackground] = useState<SceneBackground>({image: default_background})
  const [sceneCharacters, setSceneCharacters] = useState<SceneCharacter[]>([])

  const UserEventHandler = (event: KeyboardEvent | MouseEvent) => {
    UserEvents(event, setScriptStep)
  }

  useEffect(() => {
    window.addEventListener('keydown', UserEventHandler)
    window.addEventListener('click', UserEventHandler)
    SetScriptStep(setScriptStep, "scene", test_script)

    return () => {
      window.removeEventListener('keydown', UserEventHandler)
      window.removeEventListener('click', UserEventHandler)
    }
  }, [])

  useEffect(() => {
    if (!scriptStep.scene) return

    const currentScriptStep = scriptStep.scene[scriptStep.step]
    
    if (Array.isArray(currentScriptStep)) {
      switch (currentScriptStep[0]) {
        case "bg":
          const actionImageArray: ActionImageArray = currentScriptStep as ActionImageArray
          SetSceneBackground(setSceneBackground, actionImageArray)
          SetScriptStep(setScriptStep, "increment")
          break;
        case "char":
          const actionCharacterArray: ActionCharacterArray = currentScriptStep as ActionCharacterArray
          SetSceneCharacters(setSceneCharacters, actionCharacterArray, "add")
          SetScriptStep(setScriptStep, "increment")
          break;
        case "rchar":
          const actionRemoveCharacterArray: ActionCharacterArray = currentScriptStep as ActionCharacterArray
          SetSceneCharacters(setSceneCharacters, actionRemoveCharacterArray, "remove")
          SetScriptStep(setScriptStep, "increment")
          break;
      }
    } else {
      setSceneText(currentScriptStep)
    }
  }, [scriptStep])

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
        <div className={styles.leftPanel}>Left Panel</div>
        <TextPanel displayText={sceneText} />
        <div className={styles.rightPanel}>Right Panel</div>
      </div>
      <div className={styles.charactersWrapper}>{characterElements}</div>
    </div>
  )
}

export default TextEngine