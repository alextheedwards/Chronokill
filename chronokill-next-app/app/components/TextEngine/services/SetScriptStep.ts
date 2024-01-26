import { Dispatch, SetStateAction } from "react"
import { ScriptStep } from "../../../interfaces"
import { CheckFunction, SceneScript } from "../../../types"

// TODO: Fix this whole function to just take an object with the data instead. Maybe check if useReducer fixes it first though.
export const SetScriptStep = (
  setScriptStep: Dispatch<SetStateAction<ScriptStep>>, 
  type: string, 
  scene?: SceneScript,
  checkFunction?: CheckFunction
) => {
  setScriptStep((currentStep: ScriptStep) => {
    const tempStep: ScriptStep = {...currentStep}
    tempStep.direction = "forward"
    
    switch (type) {
      case "increment":
        tempStep.step = tempStep.step + 1
        break
      case "decrement":
        tempStep.step = tempStep.step - 1
        break
      case "scene":
        tempStep.scene = scene
        break
      case "check":
        if(checkFunction) {
          tempStep.check = checkFunction
          tempStep.step = tempStep.step + 1
        }
        break
      case "rcheck":
        tempStep.check = undefined
        tempStep.step = tempStep.step + 1
        break
    }

    return tempStep
  })
}

export default SetScriptStep