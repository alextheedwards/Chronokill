import { SceneScript } from "../types"

export interface ScriptStep {
  step: number,
  direction: string,
  scene: SceneScript | undefined
}

export default ScriptStep