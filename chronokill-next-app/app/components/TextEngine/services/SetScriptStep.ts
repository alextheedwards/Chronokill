import { Dispatch, SetStateAction } from "react"
import { ScriptStep } from "../../../interfaces"
import { SceneScript } from "../../../types"

export const SetScriptStep = (
  setScriptStep: Dispatch<SetStateAction<ScriptStep>>,
  type: string,
  scene?: SceneScript
) => {
  setScriptStep((currentStep: ScriptStep) => {
    const tempStep: ScriptStep = {...currentStep}
    tempStep.direction = "forward"
    
    switch (type) {
      case "increment":
        tempStep.step = tempStep.step + 1
        break;
      case "decrement":
        tempStep.step = tempStep.step - 1
      break;
      case "scene":
        tempStep.scene = scene
    }

    return tempStep
  })
}

export default SetScriptStep