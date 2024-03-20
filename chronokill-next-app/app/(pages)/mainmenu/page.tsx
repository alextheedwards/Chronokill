"use client"
import { MouseEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Button, Header } from "../../components"

import styles from "./styles.module.css"

export const MainMenu = () => {
  const [playerName, setPlayerName] = useState<string>('')
  const [isShowingPopup, setIsShowingPopup] = useState<boolean>(false)
  const [isNameRequired, setIsNameRequired] = useState<boolean>(false)

  const router = useRouter()

  useEffect(() => {
    if (!localStorage.getItem("playerName")) return

    const playerName = localStorage.getItem("playerName") as string
    setPlayerName(playerName)
  }, [])

  const onClickStart = () => {
    setIsShowingPopup(true)
  }

  const onClickPopupStart = () => {
    if (playerName.trim() === '') {
      setIsNameRequired(true)
      return
    }

    localStorage.setItem('playerName', playerName)
    setIsShowingPopup(false)
    router.push('../ingame')
  }

  const playerNameElement = () => {
    if (!isShowingPopup) return null

    return (
      <div className={styles.popupModal}>
        <div className={styles.popup}>
          <h2>Enter your name</h2>

          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />

          {isNameRequired ? <p style={{ color: 'red' }}>Name required</p> : null}
          
          <Button onClick={onClickPopupStart}>Start</Button>
          <Button onClick={() => setIsShowingPopup(false)}>Cancel</Button>
        </div>
      </div>
    )
  }

	return <>
    <div className={styles.bg}></div>
    <Header showBackButton={false} />
    <div className={styles.rectangle}>
      <div className={styles.header}>
        <img src="/logo.png" alt="Logo" className={styles.logo} />
        <h1 className={styles.h1}>MAIN MENU</h1>
      </div>

      <Button onClick={onClickStart}>Start</Button>
      <Button href="../options">Options</Button>
      <Button href="../quit">Quit</Button>
    </div>

    {playerNameElement()}
  </>
}

export default MainMenu