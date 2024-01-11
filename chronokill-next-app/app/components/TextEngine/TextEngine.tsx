'use client'

import { useEffect, useState } from "react"
import Image, { StaticImageData } from 'next/image'

import { TextPanel } from './components/TextPanel/TextPanel'
import { test_script } from "../../scripts/test_script"
import { KeyEvents,  IncrementScriptStep } from './services'
import { SceneBackground, SceneCharacter, ScriptStep } from '../../interfaces'

import default_background from '../../../public/placeholder_char.jpeg'
import styles from './styles.module.css'
import { ActionImageArray } from "../../types"
import ActionCharacterArray from "../../types/ActionCharacterArray"

//formally Ehhngine
export const TextEngine = () => {
  const [scriptStep, setScriptStep] = useState<ScriptStep>({step: 0, direction: "forward", scene: test_script})
  const [sceneText, setSceneText] = useState<string>("")
  const [sceneBackground, setSceneBackground] = useState<SceneBackground>({image: default_background})
  const [sceneCharacters, setSceneCharacters] = useState<SceneCharacter[]>([])

  const KeyboardEventHandler = (event: KeyboardEvent) => {
    KeyEvents(event, setScriptStep)
  }

  useEffect(() => {
    window.addEventListener('keydown', KeyboardEventHandler)
    return () => window.removeEventListener('keydown', KeyboardEventHandler)
  }, [])

  useEffect(() => {
    const currentScriptStep = test_script[scriptStep.step]

    if (Array.isArray(currentScriptStep)) {
      switch (currentScriptStep[0]) {
        case "bg":
          const actionImageArray: ActionImageArray = currentScriptStep as ActionImageArray
          setSceneBackground({ image: actionImageArray[1] })
          IncrementScriptStep(setScriptStep)
          break;
        case "char":
          const actionCharacterArray: ActionCharacterArray = currentScriptStep as ActionCharacterArray
          // add scene character from script
          IncrementScriptStep(setScriptStep)
          break;
        default:
          break;
      }
    } else {
      setSceneText(currentScriptStep)
    }
  }, [scriptStep])

  console.log("Text Engine Characters: ", sceneCharacters)
  console.log("Text Engine Background: ", sceneBackground)
  console.log("Text Engine Text: ", sceneText)
  return (
    <div className={styles.textEngineWrapper}>
      <div className={styles.sceneWrapper}>
        <Image src={sceneBackground.image} className={styles.sceneBackground} alt="me"/>
      </div>
      <div className={styles.textPanelWrapper}>
        <div className={styles.leftPanel}>Left Panel</div>
        <TextPanel displayText={sceneText} />
        <div className={styles.rightPanel}>Right Panel</div>
      </div>
    </div>
  )
}

export default TextEngine