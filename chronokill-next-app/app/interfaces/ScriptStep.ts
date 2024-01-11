import { ScriptTypes } from "../types"

export interface ScriptStep {
  step: number,
  direction: string,
  scene: ScriptTypes[]
}

export default ScriptStep