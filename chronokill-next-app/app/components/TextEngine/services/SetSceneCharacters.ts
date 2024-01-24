import { Dispatch, SetStateAction } from "react"
import { SceneCharacter } from "../../../interfaces"
import ActionCharacterArray from "../../../types/ActionCharacterArray"

export const SetSceneCharacters = (
  setSceneCharacters: Dispatch<SetStateAction<SceneCharacter[]>>,
  actionCharacterArray: ActionCharacterArray,
  type: string
) => {
  const sceneCharacter: SceneCharacter = actionCharacterArray[1]

  switch (type) {
    case "add":
      setSceneCharacters(currentSceneCharacters => {
        const tempCharactersArray = [...currentSceneCharacters]
        const isCharacterExisting = tempCharactersArray.some(character => character.name === sceneCharacter.name)
        
        if (!isCharacterExisting) {
          tempCharactersArray.push(sceneCharacter)
        }
    
        return tempCharactersArray
      })
      break;
    case "remove":
      setSceneCharacters(currentSceneCharacters => {
        let tempCharactersArray = [...currentSceneCharacters]
        tempCharactersArray = tempCharactersArray.filter(character => character.name !== 'Test Char')

        return tempCharactersArray
      })
      break;
  }


}

export default SetSceneCharacters