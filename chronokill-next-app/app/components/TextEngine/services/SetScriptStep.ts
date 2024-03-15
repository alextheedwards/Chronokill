import { Dispatch, SetStateAction } from "react"

export const SetScriptStep = (
  setScriptStep: Dispatch<SetStateAction<number>>, 
  type: string,
) => {
  setScriptStep((currentStep: number) => {
    let tempStep: number = currentStep
    
    switch (type) {
      case "increment":
        tempStep = tempStep + 1
        break
      case "decrement":
        tempStep = tempStep - 1
        break
      case "reset":
        tempStep = 0
        break
    }

    return tempStep
  })
}

export default SetScriptStep