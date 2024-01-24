import { Dispatch, SetStateAction } from "react"

import { ScriptStep } from '../../../interfaces'
import { SetScriptStep } from '../services'

export const UserEvents = (
  event: KeyboardEvent | MouseEvent, 
  setScriptStep: Dispatch<SetStateAction<ScriptStep>>
): void => {
  if(event instanceof KeyboardEvent) {
    switch (event.key) {
      case " ":
      case "Enter":
      case "ArrowRight":
        SetScriptStep(setScriptStep, "increment")
        break
      case "ArrowLeft":
        SetScriptStep(setScriptStep, "decrement")
        break
    } 

    return
  }

  if(event instanceof MouseEvent) {
    switch (event.button) {
      case 0:
        SetScriptStep(setScriptStep, "increment")
        break
    } 

    return
  }
}

export default UserEvents