import { Dispatch, SetStateAction } from "react"
import Image from "next/image"

import { SceneBackground } from "../../../../interfaces"

import styles from './styles.module.css'

interface BackgroundImageProps {
  sceneBackground: SceneBackground,
  isShowingOverlay: boolean
}

export const BackgroundImage = ({
  sceneBackground,
  isShowingOverlay
}: BackgroundImageProps) => {
    const imageElement = sceneBackground
    ? <Image priority src={sceneBackground} className={styles.sceneBackground} alt="me" />
    : null

  return <>
    <div className={`${styles.overlay} ${styles.opacityTransitionStandard} ${isShowingOverlay ? "" : styles.opacity0}`}></div>
    { imageElement }
  </>
}

export default BackgroundImage