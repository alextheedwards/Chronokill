import { CheckFunction, SceneScript } from "../types"

export interface ScriptStep {
  step: number,
  direction: string,
  check: CheckFunction | undefined,
  scene: SceneScript | undefined
}

export default ScriptStep