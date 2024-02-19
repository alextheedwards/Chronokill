import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import styles from './styles.module.css'

interface TextInputProps {
  type: string
  title: string
  value: string
  setter: Dispatch<SetStateAction<string>>
}

export const TextInput: React.FC<TextInputProps> = ({ type, title, value, setter }) => {
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value
    setter(inputText)
  }
  return (
    <div>
      <label className={styles.label} htmlFor={title}>{title}</label>
      <input type={type} className={styles.input} value={value} onChange={onChangeInput} />
    </div>
  )
}