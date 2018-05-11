const showTimer = document.getElementById('time')
const secondHand = document.querySelector('.second-hand')
const minutHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function time() {
    const dateTime = new Date()
    const secondsDeg = dateTime.getSeconds()
    const minDeg = dateTime.getMinutes()
    const hourdDeg = dateTime.getHours()

    showTimer.innerHTML =
        `
    ${hourdDeg < 10 ? '0' + hourdDeg : hourdDeg}
    :
    ${minDeg < 10 ? '0' + minDeg : minDeg}
    :
    ${secondsDeg < 10 ? '0' + secondsDeg : secondsDeg}
  `
    secondHand.style.transform = `rotate(${90 + (secondsDeg * 6)}deg)`
    minutHand.style.transform = `rotate(${90 + (minDeg * 6)}deg)`
    hourHand.style.transform = `rotate(${90 + (hourdDeg * 30)}deg)`
}

setInterval(time, 1000)