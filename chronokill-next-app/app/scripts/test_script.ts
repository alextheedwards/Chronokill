import { ScriptTypes } from '../types'
import { SceneCharacter } from '../interfaces'

import placeholder_2560x1440 from '../../public/placeholder_2560x1440.jpeg'
import placeholder_test_image from '../../public/placeholder_test_image.jpeg'
import placeholder_char from '../../public/placeholder_char.jpeg'

const TestChar: SceneCharacter = {
  name: "Test Char",
  color: "#ff0000",
  image: placeholder_char
}

export const test_script: ScriptTypes[] = [
  ["bg", placeholder_test_image],
  ["char", TestChar],
  "Test.",
  "Additional test.",
  ["bg", placeholder_2560x1440],
  "Reminder to use an array with a [<command>, <resource>] structure for actions in the script.",
  "Long text that is very long so that I can see how the text will wrap in the text box or not without me making any changes to make it fit."
]

export default test_script