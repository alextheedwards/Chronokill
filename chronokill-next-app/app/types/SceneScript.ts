import { ActionImageArray } from './ActionImageArray'
import { ActionCharacterArray } from './ActionCharacterArray'
import { ActionDecisionArray } from './ActionDecisionArray'
import { ActionCheckArray } from './ActionCheckArray'
import { ActionSfxArray } from './ActionSfxArray'

export type SceneScript = ( 
  string | 
  ActionImageArray | 
  ActionCharacterArray | 
  ActionDecisionArray |
  ActionCheckArray |
  ActionSfxArray
)[]

export default SceneScript