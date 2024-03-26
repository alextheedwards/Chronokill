'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react"

import styles from './styles.module.css'
import { SceneCharacter } from "../../../../interfaces"

interface TextPanelProps {
  displayText: string,
  isSkippingTextRendering: boolean,
  setIsTextRendering: Dispatch<SetStateAction<boolean>>,
  setIsSkippingTextRendering: Dispatch<SetStateAction<boolean>>,
  sceneName: SceneCharacter | undefined
}

export const TextPanel = ({
  displayText = "",
  isSkippingTextRendering,
  setIsTextRendering,
  setIsSkippingTextRendering,
  sceneName
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
}, [index, displayText, isSkippingTextRendering, setIsSkippingTextRendering, setIsTextRendering])

const titleElement = !sceneName?.name
  ? null
  : <div className={styles.textPanelTitle} style={{color: sceneName.color}}>{sceneName.name}</div>

  return <>
    { titleElement }
    <div className={styles.textPanel}>{displayedText}</div>
  </>
}

export default TextPanel