"use client";
import { useState, useEffect, ChangeEvent } from "react"
import { Button, Header } from "../../components"
import styles from "./styles.module.css"

export const Options = () => {
  const [mute, setMute] = useState(false) 
  const [previousVolume, setPreviousVolume] = useState<number>(0.0) 
  const [volume, setVolume] = useState(0.5)

  useEffect(() => {
    if (!localStorage.getItem("volume")) return

    const storedVolume = localStorage.getItem("volume") as string
    const volume = parseFloat(storedVolume)  
    setVolume(volume)
  }, [])

   const onVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVolume = e.target.value
    localStorage.setItem("volume", newVolume)
    setVolume(parseFloat(newVolume))
    if (mute) {
      setMute(false) 
      localStorage.setItem("isMuted", JSON.stringify(false))
    }
  }
 
  const onMuteChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isMuted = e.target.checked
    setMute(isMuted) 
    localStorage.setItem("isMuted", JSON.stringify(isMuted))
    if (isMuted) {
      setPreviousVolume(volume)
      setVolume(0.0) 
      localStorage.setItem("volume", "0.0"); 
    } else {
      setVolume(previousVolume) 
      localStorage.setItem("volume", previousVolume.toString()) 
    }
  }
  
  useEffect(() => {
    const storedMuteState = localStorage.getItem("isMuted")
    if (storedMuteState !== null) {
      setMute(JSON.parse(storedMuteState))
    }
    if (!localStorage.getItem("volume")) return
    
    const storedVolume = localStorage.getItem("volume") as string
    const volume = parseFloat(storedVolume)
    setVolume(volume)
  }, [])
  

  return (
    <div className={styles.gameContainer}>
      <div className={styles.bg}></div>

      <Header showBackButton={false} />

      <div className={styles.rectangle}>
        <div className={styles.header}>
          <h1 className={styles.h1}>OPTIONS</h1>
        </div>
          <p>Volume</p>

          <input
            type="range"
            id="volume"
            name="volume"
            min="0.0"
            max="1.0"
            step="0.1"
            value={volume}
            onChange={onVolumeChange}
          />
            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                checked={mute}
                onChange={onMuteChange}
                className={`${styles.checkbox} ${mute ? styles.mutedCheckbox : ''}`} />
              <label>Mute</label>
            </div>
          <Button href="../mainmenu">Main Menu</Button>
      </div>
    </div>
  )
}

export default Options
