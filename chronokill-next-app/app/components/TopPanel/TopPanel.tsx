import Link from 'next/link'

import styles from './styles.module.css'

export const TopPanel = () => {

  return (
    <div className={styles.topPanel}>
      <div className={styles.buttonWrapper}>
    	  <Link href="/">Home</Link>
		    <Link href="/login">Login</Link>
      </div>
    </div>
  )
}