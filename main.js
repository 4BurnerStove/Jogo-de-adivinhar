// Events
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const buttonClickScreenReturn2 = document.querySelector('.screen2 button')
const buttonClickScreen1 = document.querySelector('.screen1 button')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Events
buttonClickScreen1.addEventListener('click', handleClick)
buttonClickScreenReturn2.addEventListener('click', ReturnGame)

// Functions
function togleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function handleClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    togleScreen()
    screen2.querySelector(
      'h2'
    ).innerText = `Você acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ''
  xAttempts++
}

function ReturnGame() {
  togleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}
