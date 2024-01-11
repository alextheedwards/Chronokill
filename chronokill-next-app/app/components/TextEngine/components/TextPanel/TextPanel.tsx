'use client'

import { useRef, useEffect, useState } from "react"

import styles from './styles.module.css'

interface TextPanelProps {
  displayText: string
}

export const TextPanel = ({
  displayText = ""
}: TextPanelProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setDisplayedText("")
    setIndex(0)
  }, [displayText])

  useEffect(() => {
    const charDraw = () => {
      setDisplayedText(currentDisplayedText => currentDisplayedText + displayText.charAt(index))
      setIndex((prev) => prev + 1)
    }

    if (index < displayText.length) {
        const timer = setTimeout(charDraw, 50)
        return () => clearTimeout(timer)
    }
}, [index, displayText])

  return (
    <div className={styles.textPanel}>{displayedText}</div>
  )  
}

export default TextPanel