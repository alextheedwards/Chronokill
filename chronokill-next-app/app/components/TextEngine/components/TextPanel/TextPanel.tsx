'use client'

import { useEffect, useState } from "react"

import styles from './styles.module.css'

interface TextPanelProps {
  displayText: string;
  onTextComplete?: () => void;
}

export const TextPanel = ({
  displayText = "",
  onTextComplete
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
      const timer = setTimeout(charDraw, 20)
      return () => clearTimeout(timer)
    }
  }, [index, displayText])

  useEffect(() => {
    const completeTextDisplay = () => {
      // Immediately display the full text if it's not fully displayed yet
      if (index < displayText.length) {
        setDisplayedText(displayText);
        setIndex(displayText.length); // Ensure to update index to match the length of displayText
      }
    };

    // Add event listener to the whole document (or you could restrict this to a specific element)
    document.addEventListener("click", completeTextDisplay);

    // Cleanup to remove event listener
    return () => {
      document.removeEventListener("click", completeTextDisplay);
    };
  }, [index, displayText]);


  useEffect(() => {
    if (index === displayText.length) {
      onTextComplete?.(); // Call the callback if provided
    }
  }, [index, displayText.length, onTextComplete]);

  return (
    <div className={styles.textPanel}>{displayedText}</div>
  )
}

export default TextPanel