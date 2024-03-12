import { Dispatch, SetStateAction } from 'react'

import { DecisionSelection } from '../../../../types'

import styles from './styles.module.css'
import { SetScriptStep } from '../../services'

interface DecisionModalProps {
  sceneDecision: DecisionSelection,
  setSceneDecision: Dispatch<SetStateAction<DecisionSelection>>,
  sceneText: string,
  scriptAnswers: any,
  setScriptStep: Dispatch<SetStateAction<number>>
}

export const DecisionModal = ({
  sceneDecision,
  setSceneDecision,
  sceneText,
  scriptAnswers,
  setScriptStep
}: DecisionModalProps) => {
  if (sceneDecision.length === 0) return null

  const onClickChoice = (choiceMade: string) => {
    scriptAnswers[sceneDecision[0]] = choiceMade
    setSceneDecision([])
    SetScriptStep(setScriptStep, "increment")
  }

  const choices = sceneDecision[1].map((choice, index) => {
    return <button key={index} onClick={()=>onClickChoice(choice)} className={`${styles.decisionModalAnswer} ${styles.panel}`}>{choice}</button>
  })

  return (
    <div className={styles.decisionModalWrapper}>
      <div className={`${styles.decisionModalQuestion} ${styles.panel}`}>{sceneText}</div>
      {choices}
    </div>
  )
}

export default DecisionModal