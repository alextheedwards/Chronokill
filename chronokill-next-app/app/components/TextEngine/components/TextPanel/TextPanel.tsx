'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react"

import styles from './styles.module.css'

interface TextPanelProps {
  displayText: string,
  skipTextRendering: boolean,
  setIsTextRendering: Dispatch<SetStateAction<boolean>>,
  setSkipTextRendering: Dispatch<SetStateAction<boolean>>
}

export const TextPanel = ({
  displayText = "",
  skipTextRendering,
  setIsTextRendering,
  setSkipTextRendering
}: TextPanelProps) => {
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setDisplayedText("")
    setIndex(0)
  }, [displayText])

  useEffect(() => {
    const charDraw = () => {
      if (!skipTextRendering) {
        setDisplayedText(currentDisplayedText => currentDisplayedText + displayText.charAt(index))
        setIndex((prev) => prev + 1)
      } else {
        setDisplayedText(displayText)
        setIndex(displayText.length)
        setSkipTextRendering(false)
      }
    }

    if (index < displayText.length) {
      setIsTextRendering(true)
      const timer = setTimeout(charDraw, 20)
      return () => clearTimeout(timer)
    } else {
      setIsTextRendering(false)
    }
}, [index, displayText])

  return (
    <div className={styles.textPanel}>{displayedText}</div>
  )  
}

export default TextPanel