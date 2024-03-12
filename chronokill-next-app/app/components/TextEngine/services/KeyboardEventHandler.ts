import { Dispatch, SetStateAction } from "react"

import { SetScriptStep } from "."

export const KeyboardEventHandler = (
  setScriptStep: Dispatch<SetStateAction<number>>, 
  event: KeyboardEvent,
  disable: boolean
) => {
  if (disable) return 

  switch (event.key) {
    case " ":
    case "Enter":
    case "ArrowRight":
      SetScriptStep(setScriptStep, "increment")
      break
  } 
}

export default KeyboardEventHandler