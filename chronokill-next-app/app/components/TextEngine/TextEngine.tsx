'use client'

import { useEffect, useState } from "react"

import { TextPanel } from './components/TextPanel/TextPanel'
import { test_script } from '../../scripts'
import styles from './styles.module.css'

interface ScriptStep {
  step: number,
  scene: string[]
}

//formally Ehhngine
export const TextEngine = () => {
  const [scriptStep, setScriptStep] = useState<ScriptStep>({step: 0, scene: test_script})
  const [sceneText, setSceneText] = useState<string>("")
  
  const keyEvent = (event: KeyboardEvent): void => {
    switch (event.key) {
      case "ArrowRight":
        console.log("Arrow Right")

        setScriptStep((currentStep: ScriptStep) => {
          const tempStep: ScriptStep = {...currentStep}
          tempStep.step = tempStep.step + 1

          return tempStep
        })
        break;
      case "ArrowLeft":
        console.log("Arrow Left")

        setScriptStep((currentStep: ScriptStep) => {
          const tempStep: ScriptStep = {...currentStep}
          tempStep.step = tempStep.step - 1

          return tempStep
        })
        break;
      default:
        break;
    } 
  }

  useEffect(() => {
    window.addEventListener('keydown', keyEvent)
    return () => window.removeEventListener('keydown', keyEvent)
  }, [])

  useEffect(() => {
    setSceneText(scriptStep.scene[scriptStep.step])
  }, [scriptStep])

  console.log("Text Engine Render: ", sceneText)
  return (
    <div className={styles.textEngine}>
      <div className={styles.leftPanel}>Left Panel</div>
      <TextPanel displayText={sceneText} />
      <div className={styles.rightPanel}>Right Panel</div>
    </div>
  )
}

export default TextEngine