import Link from 'next/link'

import styles from './styles.module.css'

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <button className={styles.button}>{children}</button>
    </Link>
  )
}