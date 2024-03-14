import { Dispatch, SetStateAction } from "react"
import { SceneCharacter } from "../../../interfaces"
import ActionCharacterArray from "../../../types/ActionCharacterArray"
import { ActionTypes } from "../../../constants"

export const SetSceneCharacters = (
  setSceneCharacters: Dispatch<SetStateAction<SceneCharacter[]>>,
  type: string,
  actionCharacterArray?: ActionCharacterArray
) => {
  let sceneCharacter: SceneCharacter

  if (actionCharacterArray) {
    sceneCharacter = actionCharacterArray[1]
  }

  switch (type) {
    case ActionTypes.char:
      setSceneCharacters(currentSceneCharacters => {
        const tempCharactersArray = [...currentSceneCharacters]
        const isCharacterExisting = tempCharactersArray.some(character => character.name === sceneCharacter.name)
        
        if (!isCharacterExisting) {
          tempCharactersArray.push(sceneCharacter)
        }
    
        return tempCharactersArray
      })
      break
    case ActionTypes.echar:
      setSceneCharacters(currentSceneCharacters => {
        const tempCharactersArray = [...currentSceneCharacters]

        if (sceneCharacter) {
          if (actionCharacterArray && actionCharacterArray.length > 2) {
            sceneCharacter.styles = actionCharacterArray[2]
          }
        }

        return tempCharactersArray
      })
      break
    case ActionTypes.rchar:
      setSceneCharacters(currentSceneCharacters => {
        let tempCharactersArray = [...currentSceneCharacters]
        tempCharactersArray = tempCharactersArray.filter(character => character.name !== sceneCharacter.name)

        return tempCharactersArray
      })
      break
    case "clear":
      setSceneCharacters([])
  }
}

export default SetSceneCharacters