
export const AudioService = (sceneSfx: string, volume: number) => {
  const audio = new Audio(sceneSfx)
  audio.volume = volume

  const onPlayEnded = () => {
    audio.pause()
    audio.src = ''
    console.log("Audio cleared!")
  }
  
  audio.onended = onPlayEnded
  audio.play()
}

export default AudioService