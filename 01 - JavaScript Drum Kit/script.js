function keyPress(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  audio ? playSound(audio) : ''

  const key = document.querySelector(`div.key[data-key="${e.keyCode}"]`)
  key ? animateKey(key) : ''
}

function playSound(audio) {
  audio.currentTime = 0
  audio.play()
}

function animateKey(key) {
  key.classList.add('playing')
  setTimeout(() => {
    key.classList.remove('playing')
  }, 70)
}

window.addEventListener('keydown', keyPress)
