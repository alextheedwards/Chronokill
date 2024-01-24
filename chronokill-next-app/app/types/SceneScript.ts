import { ActionImageArray } from './ActionImageArray'
import { ActionCharacterArray } from './ActionCharacterArray'

export type SceneScript = (string | ActionImageArray | ActionCharacterArray)[]

export default SceneScript