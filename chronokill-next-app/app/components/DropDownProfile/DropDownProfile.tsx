import { Dispatch, SetStateAction, useCallback } from 'react'

interface Option {
  value: string
  label: string
}

interface DropDownProps {
  options: Option[]
  value: string
  setValue: Dispatch<SetStateAction<any>> 
}

export const DropDownProfile = ({ 
  options, 
  value, 
  setValue 
}: DropDownProps) => {
  const onSelectChange = (e: any) => {
    const selectedOption = e.target.value
    setValue(selectedOption)
  }

  const selectionOptions = useCallback(() => {
    const optionElements = options.map((option, index) => {
      return (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      )
    })

    return optionElements
  }, [options])

  return (
    <select value={value} onChange={onSelectChange}>
      {selectionOptions()}
    </select>
  )
}

export default DropDownProfile
