//define a data alvo
const targetDate = new Date("December 24, 2024 23:59:59").getTime()

//atualiza o cronômetro a cada segundo
const countdown = setInterval(function(){
    const now = new Date().getTime()
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) )
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    //atualiza o HTML com as informações
    document.getElementById("days").textContent = days
    document.getElementById("hours").textContent = hours
    document.getElementById("minutes").textContent = minutes
    document.getElementById("seconds").textContent = seconds

}, 1000)
