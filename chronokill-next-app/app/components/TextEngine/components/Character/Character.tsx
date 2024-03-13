'use client'
import Image from 'next/image'

import styles from './styles.module.css'
import { SceneCharacter } from '../../../../interfaces'

interface CharacterProps {
  sceneCharacter: SceneCharacter
}

export const Character = ({
  sceneCharacter
}: CharacterProps) => {
  if (!sceneCharacter.image) return null
  
  // collect the 'supported' style keys in an array and then filter over that array
  // to exclude styles that are not defined for the characters in the scene script
  // once filtered, reduce the styles object down to just the character ones
  const filteredStyles = Object.keys(styles)
    .filter((style) => sceneCharacter.styles?.includes(style))
    .reduce((object, key) => {
      return Object.assign(object, {
        [key]: styles[key]
      })
    }, {})

  //stringify an array of values of the object produced from the above statement
  const stylesString = Object.values(filteredStyles).toString().replace(/,/g, " ")

  return (
    <Image 
      src={sceneCharacter.image} 
      className={`${styles.character} ${stylesString}`} 
      alt="me"
    />
  )
}

export default Character