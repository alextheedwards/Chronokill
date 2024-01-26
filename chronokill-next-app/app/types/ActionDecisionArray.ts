import { DecisionSelection } from "."

export type ActionDecisionArray = [
  action: string,
  ...decisionSelection: DecisionSelection
]

export default ActionDecisionArray