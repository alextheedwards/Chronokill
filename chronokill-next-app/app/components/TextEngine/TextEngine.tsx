'use client'

import { useEffect, useState } from "react"

import { test_script } from '../../scripts'

interface ScriptStep {
  step: number,
  scene: any
}

export const TextEngine = () => {
  const [scriptStep, setScriptStep] = useState<ScriptStep>({step: 0, scene: ['']})
  
  const keyEvent = (event: KeyboardEvent): void => {
    switch (event.key) {
      case "ArrowRight":
        console.log("Arrow Right")
        setScriptStep(currentStep => {
          const tempStep = {...currentStep}
          tempStep.step = tempStep.step + 1

          return tempStep
        })
        break;
      case "ArrowLeft":
        console.log("Arrow Left")
        break;
      default:
        break;
    } 
  }

  useEffect(() => {
    window.addEventListener('keydown', keyEvent)
    return () => window.removeEventListener('keydown', keyEvent)
  }, [])

  return (
    <div>
      Text Engine
      <div>{}</div>
    </div>
  )
}

export default TextEngine