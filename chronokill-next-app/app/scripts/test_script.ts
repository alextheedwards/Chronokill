import { SceneScript } from '../types'
import { SceneCharacter } from '../interfaces'
import { ActionTypes } from '../constants'
import { monday_script, monday_script_answers } from './monday_script'

import placeholder_2560x1440 from '../../public/placeholder_2560x1440.jpeg'
import placeholder_test_image from '../../public/placeholder_test_image.jpeg'
import placeholder_char from '../../public/placeholder_char.jpeg'

const TestChar: SceneCharacter = {
  name: "Test Char",
  color: "#ff0000",
  image: placeholder_char,
  styles: ["centre-right"]
}

const TestCharDupe: SceneCharacter = {
  name: "Test Char Dupe",
  color: "#ff0000",
  image: placeholder_char,
  styles: ["left", "mirror"]
}

const decision1: string[] = [
  "Yes",
  "No"
]

const decision2: string[] = [ 
  "Mihi Est", 
  "Imperare",
  "Orbi Universo"
]

export const test_script_answers: any = {
  decision1: undefined,
  decision2: undefined
}



// Script start
export const test_script: SceneScript = [
  "Time to load background.",

  [ActionTypes.bg, placeholder_test_image],

  'Now playing some sound effects.',

  [ActionTypes.sfx, "jerma-scorn.mp3"],

  "Time to load a character.",
  
  [ActionTypes.char, TestChar],

  "Lets ask a question.",

  [ActionTypes.qa, "decision1", decision1],

  "Lets see what happens when we remove the background.",

  [ActionTypes.bg, undefined],

  "...",
  "V O I D",
  "Lets add a new background with a bigger image, and add a new character.",

  [ActionTypes.bg, placeholder_2560x1440],
  [ActionTypes.char, TestCharDupe],

  "That new character is mirrored! Must be the character styles.",
  "Time for a second question with more options.",

  [ActionTypes.qa, "decision2", decision2],

  "Check time!",

  [ActionTypes.check, () => test_script_answers.decision1 === decision1[0]],
  "Text that only renders if you selected yes!",
  [ActionTypes.check, () => test_script_answers.decision1 === decision1[1]],
  "Text that only renders if you selected no!",
  [ActionTypes.rcheck],

  "Long text that is very long so that I can see how the text will wrap in the text box or not without me making any changes to make it fit.",

  [ActionTypes.rchar, TestChar],

  "Begone!",
  "Time to check up on our checks.",

  [ActionTypes.check, () => test_script_answers.decision2 === decision2[0]],
  `Text that only renders if you selected ${decision2[0]}`,
  "And only shows you this number too: 1",
  [ActionTypes.check, () => test_script_answers.decision2 === decision2[1]],
  `Text that only renders if you selected ${decision2[1]}`,
  "And only shows you this number too: 2",
  [ActionTypes.check, () => test_script_answers.decision2 === decision2[2]],
  `Text that only renders if you selected ${decision2[2]}`,
  "And only shows you this number too: 3",
  [ActionTypes.rcheck],

  "ENDUT! HOCH HECH!",

  [ActionTypes.script, monday_script, monday_script_answers]
]

export default test_script