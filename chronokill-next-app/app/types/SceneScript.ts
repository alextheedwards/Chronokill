import { ActionImageArray } from './ActionImageArray'
import { ActionCharacterArray } from './ActionCharacterArray'
import { ActionDecisionArray } from './ActionDecisionArray'
import { ActionCheckArray } from './ActionCheckArray'
import { ActionSfxArray } from './ActionSfxArray'
import { ActionScriptArray } from './ActionScriptArray'

export type SceneScript = ( 
  string | 
  ActionImageArray | 
  ActionCharacterArray | 
  ActionDecisionArray |
  ActionCheckArray |
  ActionSfxArray |
  ActionScriptArray
)[]

export default SceneScript