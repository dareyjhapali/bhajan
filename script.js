function playBhajan(bhajanFile) {
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');
    
    // Set the new source for the audio player
    audioSource.src = bhajanFile;
    
    // Load and play the new bhajan
    audioPlayer.load();
    audioPlayer.play();
}
