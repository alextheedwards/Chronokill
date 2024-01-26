import Link from 'next/link'

import styles from './styles.module.css'

export const TopPanel = () => {

  return (
    <div className={styles.topPanel}>
      <div className={styles.dateWrapper}>Monday, 22 / 01 / 24, 09:00</div>
      <div className={styles.titleWrapper}>ChronoKill</div>
      <div className={styles.burgerMenuArea}>
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
      </div>
    </div>
  )
}