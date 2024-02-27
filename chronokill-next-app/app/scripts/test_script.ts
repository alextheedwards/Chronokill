import { SceneScript } from '../types'
import { SceneCharacter } from '../interfaces'
import { ActionTypes } from '../constants'
import { monday_script, monday_script_answers } from './monday_script'

import placeholderBg from '../../public/backgrounds/placeholderBg.png'
import placeholderBgColor from '../../public/backgrounds/placeholderBgColor.png'
import placeholder_char from '../../public/placeholder_char.jpeg'

const Narrator: SceneCharacter = {
  name: "Narrator",
  color: "#000000"
}

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
  "Welcome to the TextEngine default tests script.",
  `This script will run through all the features available to TextEngine as of ${new Date().toDateString()}.`,
  `This won't make much sense unless you're also looking at the default script file, test_script.js`,
  "We'll run through all the available ActionTypes and things you can do.",
  "First things first, lets load a background.",

  [ActionTypes.bg, placeholderBg],

  "You're finally awake..",
  "Let me tell you my name.",

  [ActionTypes.name, Narrator],

  'Now, lets play some sound effects.',

  [ActionTypes.sfx, "jerma-scorn.mp3"],

  "Time to load a character.",
  
  [ActionTypes.char, TestChar],

  "Lets ask a question.",
  "Yes or no?",

  [ActionTypes.qa, "decision1", decision1],

  "Lets see what happens when we remove the background.",

  [ActionTypes.bg, undefined],

  "...",
  "V O I D",
  "Lets add a new background with a bigger image, and add a new character.",

  [ActionTypes.bg, placeholderBgColor],
  [ActionTypes.char, TestCharDupe],

  "That new character is mirrored! Must be the character styles.",
  "Time for a second question with more options.",
  "MEIOU?",

  [ActionTypes.qa, "decision2", decision2],

  "Time to conditionally render some text.",

  [ActionTypes.check, () => test_script_answers.decision1 === decision1[0]],
  "Text that only renders if you selected yes!",
  [ActionTypes.check, () => test_script_answers.decision1 === decision1[1]],
  "Text that only renders if you selected no!",
  [ActionTypes.rcheck],

  "Long text that is very long so that I can see how the text will wrap in the text box or not without me making any changes to make it fit.",
  "Time to get rid of a character.",

  [ActionTypes.rchar, TestChar],

  "Begone!",
  "Lets get rid of this name while we're at it..",
  [ActionTypes.name, undefined],
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