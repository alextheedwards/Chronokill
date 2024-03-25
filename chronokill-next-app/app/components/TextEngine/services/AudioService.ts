let currentAudio: HTMLAudioElement | null = null;

export const AudioService = (sceneMp3: string, volume: number) => {
    const audio = new Audio(sceneMp3)
    audio.volume = volume
    audio.loop = true

    audio.play();

    // Set the current audio object
    currentAudio = audio;

    return currentAudio;
};

export const StopAudioService = () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.src = '';
        console.log("Audio stopped!");
    } else {
        console.log("No audio is playing.");
    }
};