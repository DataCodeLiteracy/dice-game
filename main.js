const rollDiceBtn = document.querySelector('.roll-dice')
const diceImgElem = document.querySelector('.dice-img')
const diceImgWrap = document.querySelector('.dice-img--wrap')
const player1CurrentScore = document.querySelector('.player1 .current--score')

let currentScore = 0
let accumulateScore = 0
let totalScore = 0

rollDiceBtn.addEventListener('click', () => {
  currentScore = Math.floor(Math.random() * 6 + 1)

  diceImgElem.src = `http://127.0.0.1:8080/assets/dice0${currentScore}.png`

  diceImgElem.classList.add('active')

  if (currentScore < 3) {
    currentScore = 0
    totalScore = 0
    player1CurrentScore.innerHTML = 0
    accumulateScore = 0
  } else if (currentScore >= 3) {
    accumulateScore += currentScore
    totalScore = totalScore + currentScore

    player1CurrentScore.innerHTML = accumulateScore
  }

  console.log('currentScore', currentScore)
  console.log('accumulateScore', accumulateScore)
  console.log('totalScore', totalScore)
})
