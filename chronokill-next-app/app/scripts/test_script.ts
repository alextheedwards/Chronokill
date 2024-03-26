import { SceneScript } from '../types'
import { SceneCharacter } from '../interfaces'
import { ActionTypes } from '../constants'
import { monday_script, monday_script_answers } from './monday_script'

import placeholderBg from '../../public/backgrounds/placeholderBg.png'
import placeholderBgColor from '../../public/backgrounds/placeholderBgColor.png'
import placeholder_char from '../../public/placeholder_char.jpeg'

// character declarations
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


// decision declarations
const decision1: string[] = [
  "Yes",
  "No"
]

const decision2: string[] = [ 
  "Mihi Est", 
  "Imperare",
  "Orbi Universo"
]


// answers object
export const test_script_answers: any = {
  decision1: undefined,
  decision2: undefined,
  score: 0
}


// sub-scripts that can be spread into the main script
// these can even be in seperate files
// used for the first check's conditional code here.
const checkYes: SceneScript = [
  "Text that only renders if you selected yes!",

  [ActionTypes.name, TestChar],
  "Hey, you picked yes!",
  [ActionTypes.name, Narrator],
  "That's right."
]

const checkNo: SceneScript = [
  "Text that only renders if you selected no!",

  [ActionTypes.name, TestCharDupe],
  "Whoa, you picked no!",
  [ActionTypes.name, Narrator],
  "They did, didn't they.."
]



// Script start
export const test_script: SceneScript = [
  "Welcome to the TextEngine default tests script, <PlayerName>.",
  `This script will run through all the features available to TextEngine as of ${new Date().toDateString()}.`,
  `This won't make much sense unless you're also looking at the default script file, test_script.js`,
  "We'll run through all the available ActionTypes and things you can do.",
  "First things first, lets load a background.",

  [ActionTypes.bg, placeholderBg],
  [ActionTypes.amb, "office-ambience-24734.mp3"],

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

  [ActionTypes.check, () => test_script_answers.decision1 === decision1[0]],
    [ActionTypes.score, 1],
  [ActionTypes.check, () => test_script_answers.decision1 === decision1[1]],
    [ActionTypes.score, -1],
  [ActionTypes.rcheck],

  "Lets see what happens when we remove the background.",

  [ActionTypes.bg, undefined],
  [ActionTypes.ramb],

  "...",
  "V O I D",
  "Lets add a new background with some colour to it, and add a new character.",

  [ActionTypes.bg, placeholderBgColor],
  [ActionTypes.char, TestCharDupe],

  "That new character is mirrored! Must be the character styles.",
  "Time for a second question with more options.",
  "MEIOU?",

  [ActionTypes.qa, "decision2", decision2],

  [ActionTypes.check, () => test_script_answers.decision2 === decision2[0]],
    [ActionTypes.score, 1],
  [ActionTypes.check, () => test_script_answers.decision2 === decision2[1]],
    [ActionTypes.score, 2],
  [ActionTypes.check, () => test_script_answers.decision2 === decision2[2]],
    [ActionTypes.score, -2],
  [ActionTypes.rcheck],

  "Score checking",

  [ActionTypes.check, () => test_script_answers.score > 0],
    `The score of <Score> was greater than 0.`,
  [ActionTypes.check, () => test_script_answers.score <= 0],
    `The score of <Score> was less than or equal to 0.`,
  [ActionTypes.rcheck],

  "Time to conditionally render some text.",

  [ActionTypes.check, () => test_script_answers.decision1 === decision1[0]],
    ...checkYes,
  [ActionTypes.check, () => test_script_answers.decision1 === decision1[1]],
    ...checkNo,
  [ActionTypes.rcheck],

  "Long text that is very long so that I can see how the text will wrap in the text box or not without me making any changes to make it fit.",
  "Time to get rid of a character.",

  [ActionTypes.rchar, TestChar],

  "Begone!",
  "Lets get rid of this name while we're at it..",

  [ActionTypes.name, undefined],

  "Time to check up on our checks.",

  [ActionTypes.check, () => test_script_answers.decision2 === decision2[0]],
    `Text that only renders if you selected ${decision2[0]}.`,
    "And only shows you this number too: 1",
  [ActionTypes.check, () => test_script_answers.decision2 === decision2[1]],
    `Text that only renders if you selected ${decision2[1]}.`,
    "And only shows you this number too: 2",
  [ActionTypes.check, () => test_script_answers.decision2 === decision2[2]],
    `Text that only renders if you selected ${decision2[2]}.`,
    "And only shows you this number too: 3",
  [ActionTypes.rcheck],

  [ActionTypes.name, Narrator],

  "That's it for the test script.",
  "ENDUT! HOCH HECH!",

  [ActionTypes.endgame, "This is the end..."]
]

export default test_script