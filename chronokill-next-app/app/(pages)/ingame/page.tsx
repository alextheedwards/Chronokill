import { TextEngine, TopPanel } from '../../components'

import styles from './styles.module.css'

export const Ingame = () => {
	return (
		<div className={styles.ingameUI}>
			<TopPanel />
			<TextEngine />
		</div> 
	)
}
  
export default Ingame