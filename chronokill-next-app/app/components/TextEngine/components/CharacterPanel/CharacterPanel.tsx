import { Character } from ".."
import { SceneCharacter } from "../../../../interfaces"

interface CharacterPanelProps {
  sceneCharacters: SceneCharacter[]
}

export const CharacterPanel = ({
  sceneCharacters
}: CharacterPanelProps) => {
  if (sceneCharacters.length === 0) return null

  const characterElements = sceneCharacters.map(sceneCharacter => {
    return <Character key={sceneCharacter.name} sceneCharacter={sceneCharacter} />
  })

  return (
    <>
      { characterElements }
    </>
  )
}

export default CharacterPanel