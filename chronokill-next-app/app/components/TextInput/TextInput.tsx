import styles from './styles.module.css'

interface TextInputProps {
  type: string;
  title: string;
}

export const TextInput: React.FC<TextInputProps> = ({ type, title }) => {
  return (
    <div>
      <label className={styles.label} htmlFor={title}>{title}</label>
      <input type={type} id={title} className={styles.input} />
    </div>
  )
}