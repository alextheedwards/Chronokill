"use client";
import { useState, useEffect, ChangeEvent } from "react";
import { Button, Header } from "../../components";
import DropDownProfile from "../../components/DropDownProfile/page";
import styles from "./styles.module.css";
import { FontSizeOption } from "../../constants";

export const Options = () => {
  const [mute, setMute] = useState(false) //set up mute
  const [previousVolume, setPreviousVolume] = useState<number>(0.0) //set up the previous volume to get back to it
  const [selectedFontSize, setSelectedFontSize] = useState(FontSizeOption[0])
  const [volume, setVolume] = useState(0.5)

  const handleSelectedChange = (
    selected: any,
    updateState: React.Dispatch<React.SetStateAction<any>>
  ) => {
    updateState(selected);
    
  }

  useEffect(() => {
    if (!localStorage.getItem("volume")) return

    const storedVolume = localStorage.getItem("volume") as string
    const volume = parseFloat(storedVolume)  
    setVolume(volume)
  }, [])

   const onVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVolume = e.target.value;
    localStorage.setItem("volume", newVolume)
    setVolume(parseFloat(newVolume))
    setMute(false);
  }

  // handling mute 
  const onMuteChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isMuted = e.target.checked;
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
    <div className={`${styles.gameContainer}`}>
      <div className={styles.bg}></div>
      <Header showBackButton={false} />
      <div className={styles.rectangle}>
        <div className={styles.header}>
          <h1 className={styles.h1}>OPTIONS</h1>
        </div>
        <form className={styles.form}>
          <DropDownProfile
            options={FontSizeOption}
            selected={selectedFontSize}
            onSelectedChange={handleSelectedChange}
            useState={setSelectedFontSize}
          />
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
          <div className={styles.darkModeToggle}>
            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                checked={mute}
                onChange={onMuteChange}
                className={`${styles.checkbox} ${mute ? styles.mutedCheckbox : ''}`}
              />
              <label>Mute</label>
            </div>
          </div>
          <Button href="../mainmenu">Main Menu</Button>
        </form>
      </div>
    </div>
  );
};

export default Options;

