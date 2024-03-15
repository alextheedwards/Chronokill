import { Dispatch, SetStateAction, MouseEvent } from "react"

import { SetScriptStep } from "."

export const MouseEventHandler = (
  setScriptStep: Dispatch<SetStateAction<number>>, 
  event: MouseEvent<HTMLDivElement>,
  disable: boolean
) => {
  if (disable) return

  switch (event.button) {
    case 0:
      SetScriptStep(setScriptStep, "increment")
      break
  }
}

export default MouseEventHandler