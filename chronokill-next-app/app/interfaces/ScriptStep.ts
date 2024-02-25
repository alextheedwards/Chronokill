import { CheckFunction } from "../types"

export interface ScriptStep {
  step: number,
  check: CheckFunction | undefined
}

export default ScriptStep