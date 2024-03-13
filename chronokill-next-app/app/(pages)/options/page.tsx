"use client"
import { useState, useEffect, ChangeEvent } from "react"

import { Button, Header, DropDownProfile } from "../../components"
import { FontSizeOptions } from "../../constants"

import styles from "./styles.module.css"

const Options = () => {
  const [mute, setMute] = useState<boolean>(false)
  const [previousVolume, setPreviousVolume] = useState<number>(0.0)
  const [selectedFontSize, setSelectedFontSize] = useState<string>("")
  const [volume, setVolume] = useState<number>(0.5)

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
    setMute(false)
  }

  const onMuteChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isMuted = e.target.checked
    setMute(!isMuted)
    if (mute) {
      setPreviousVolume(volume)
      setVolume(0.0)
      localStorage.setItem("volume", volume.toString())
    } else {
      setVolume(previousVolume)
      localStorage.setItem("volume", previousVolume.toString())
    }
  }

  return (
    <div className={styles.gameContainer}>
      <div className={styles.bg}></div>

      <Header showBackButton={false} />

      <div className={styles.rectangle}>
        <div className={styles.header}>
          <h1 className={styles.h1}>OPTIONS</h1>
        </div>

        <form className={styles.form}>
          <DropDownProfile
            options={FontSizeOptions}
            value={selectedFontSize}
            setValue={setSelectedFontSize} />

          <p>Volume</p>

          <input
            type="range"
            id="volume"
            name="volume"
            min="0.0"
            max="1.0"
            step="0.1"
            value={volume}
            onChange={onVolumeChange} />

          <div className={styles.darkModeToggle}>
            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                checked={mute}
                onChange={onMuteChange}
                className={`${styles.checkbox} ${mute ? styles.mutedCheckbox : ''}`} />
              <label>Mute</label>
            </div>
          </div>

          <Button href="../mainmenu">Main Menu</Button>
        </form>
      </div>
    </div>
  )
}

export default Options
