'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react"

import styles from './styles.module.css'

interface TextPanelProps {
  displayText: string,
  isSkippingTextRendering: boolean,
  setIsTextRendering: Dispatch<SetStateAction<boolean>>,
  setIsSkippingTextRendering: Dispatch<SetStateAction<boolean>>
}

export const TextPanel = ({
  displayText = "",
  isSkippingTextRendering,
  setIsTextRendering,
  setIsSkippingTextRendering
}: TextPanelProps) => {
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setDisplayedText("")
    setIndex(0)
  }, [displayText])

  useEffect(() => {
    const charDraw = () => {
      if (!isSkippingTextRendering) {
        setDisplayedText(currentDisplayedText => currentDisplayedText + displayText.charAt(index))
        setIndex((prev) => prev + 1)
      } else {
        setDisplayedText(displayText)
        setIndex(displayText.length)
        setIsSkippingTextRendering(false)
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