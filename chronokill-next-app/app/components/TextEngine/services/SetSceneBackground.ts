import { Dispatch, SetStateAction } from "react"
import { ActionImageArray } from "../../../types"
import { SceneBackground } from "../../../interfaces"
import { StaticImageData } from "next/image"

export const SetSceneBackground = (
  setSceneBackground: Dispatch<SetStateAction<SceneBackground>>,
  actionImageArray: ActionImageArray
) => {
  const backgroundImageData: StaticImageData = actionImageArray[1]
  setSceneBackground({ image: backgroundImageData})
}

export default SetSceneBackground