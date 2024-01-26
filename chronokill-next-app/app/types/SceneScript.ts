import { ActionImageArray } from './ActionImageArray'
import { ActionCharacterArray } from './ActionCharacterArray'
import { ActionDecisionArray } from './ActionDecisionArray'
import { ActionCheckArray } from './ActionCheckArray'

export type SceneScript = ( 
  string | 
  ActionImageArray | 
  ActionCharacterArray | 
  ActionDecisionArray |
  ActionCheckArray
)[]

export default SceneScript