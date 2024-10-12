const audioMerrychristmas = new Audio('../assets/audio/merry-christmas.mp3')
const audioConffeti = new Audio('../assets/audio/confetti.wav')

audioMerrychristmas.volume = 0.4
audioConffeti.volume = 0.2

function addItem(){

    audioMerrychristmas.play()
    audioConffeti.play()
    
    handleConfettiEffect()
}