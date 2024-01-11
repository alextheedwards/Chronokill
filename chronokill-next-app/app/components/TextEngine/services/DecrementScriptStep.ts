import { Dispatch, SetStateAction } from "react"
import { ScriptStep } from "../../../interfaces"

export const DecrementScriptStep = (setScriptStep: Dispatch<SetStateAction<ScriptStep>>) => {
  setScriptStep((currentStep: ScriptStep) => {
    const tempStep: ScriptStep = {...currentStep}
    tempStep.direction = "reverse"
    tempStep.step = tempStep.step - 1

    return tempStep
  })
}

export default DecrementScriptStep