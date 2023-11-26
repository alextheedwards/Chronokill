
import { TextEngine, TopPanel } from '../../components'

import styles from './styles.module.css'

export const Dashboard = () => {
	
	return (
		<div className={styles.dashboard}>
      <TopPanel />

      <div className={styles.centrePanelWrapper}>Dashboard</div>

      <TextEngine />
		</div> 
	)
}
  
export default Dashboard