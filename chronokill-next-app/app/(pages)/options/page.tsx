"use client";
import styles from "./styles.module.css";
import { Button, Header } from "../../components";
import { useState } from "react";
import DropDownProfile from "../../components/DropDownProfile/page";

export const Options = () => {
  const fontSizeOption = [
    { value: "", label: "Font Size" },
    { value: "1", label: "Small" },
    { value: "2", label: "Normal" },
    { value: "3", label: "Big" },
  ];

  const [selectedFontSize, setSelectedFontSize] = useState(fontSizeOption[0]);
  const [darkMode, setDarkMode] = useState(false);
  const [mute, setMute] = useState(false);

  const handleSelectedChange = (
    selected: any,
    updateState: React.Dispatch<React.SetStateAction<any>>
  ) => {
    updateState(selected);
    console.log(selected);
  };

  return (
    <div>
      <div className={styles.bg}></div>
      <Header showBackButton={false} />
      <div className={styles.rectangle}>
        <div className={styles.header}>
          <h1 className={styles.h1}>OPTIONS</h1>
        </div>
        <form className={styles.form}>
          <DropDownProfile
            options={fontSizeOption}
            selected={selectedFontSize}
            onSelectedChange={handleSelectedChange}
            useState={setSelectedFontSize}
          />
          <p>Volume</p>
          <input type="range" id="volume" name="volume" min="0" max="11" />
          <div className={styles.darkModeToggle}>
            <div className={styles.darkModeCheckbox}>
              <input
                type="checkbox"
                checked={mute}
                onChange={() => setMute(!mute)}
              />
              <label>Mute</label>
            </div>
          </div>
          <div className={styles.darkModeToggle}>
            <div className={styles.darkModeCheckbox}>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <label>Dark Mode</label>
            </div>
          </div>
          <Button href="../mainmenu">Main Menu</Button>
        </form>
      </div>
    </div>
  );
};

export default Options;
