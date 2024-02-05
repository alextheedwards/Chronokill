
export const AudioService = (sceneSfx: string) => {
  const audio = new Audio(sceneSfx)
  audio.volume = 0.2

  const onPlayEnded = () => {
    audio.pause()
    audio.src = ''
    console.log("Audio cleared!")
  }
  
  audio.onended = onPlayEnded
  audio.play()
}

export default AudioService