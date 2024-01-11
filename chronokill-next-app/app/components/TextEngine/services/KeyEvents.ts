import { Dispatch, SetStateAction } from "react"

import { ScriptStep } from '../../../interfaces'
import { IncrementScriptStep, DecrementScriptStep } from '../services'

export const KeyEvents = (event: KeyboardEvent, setScriptStep: Dispatch<SetStateAction<ScriptStep>>): void => {
  switch (event.key) {
    case "ArrowRight":
      IncrementScriptStep(setScriptStep)
      break;
    case "ArrowLeft":
      DecrementScriptStep(setScriptStep)
      break;
  } 
}

export default KeyEvents