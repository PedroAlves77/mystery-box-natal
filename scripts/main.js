let count = 0
const countElement = document.getElementById('cart-count')

const audioMerrychristmas = new Audio('../assets/audio/merry-christmas.mp3')
const audioConffeti = new Audio('../assets/audio/confetti.wav')

audioMerrychristmas.volume = 0.4
audioConffeti.volume = 0.2

function addItem(){

    if(count=== 0){
        countElement.style.display = 'block'
    }
    
    count++
    countElement.innerText = count

    audioMerrychristmas.play()
    audioConffeti.play()
    
    handleConfettiEffect()
}