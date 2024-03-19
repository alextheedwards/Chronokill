import Link from 'next/link'

import styles from './styles.module.css'

export const TopPanel = () => {

  return (
    <div className={styles.topPanel}>
      <div className={styles.dateWrapper}></div>
      <div className={styles.titleWrapper}>Chronokill</div>
      <div className={styles.burgerMenuArea}>
        <Link href="/">Home</Link>
      </div>
    </div>
  )
}