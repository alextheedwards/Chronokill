import { StaticImageData } from "next/image"

export interface SceneCharacter {
  name: string,
  color: string,
  image: StaticImageData
}

export default SceneCharacter