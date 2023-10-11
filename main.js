const rollDiceBtn = document.querySelector('.roll-dice')
const holdBtn = document.querySelector('.hold')
const diceImgElem = document.querySelector('.dice-img')
const diceImgWrap = document.querySelector('.dice-img--wrap')
const p1CurrentScoreElem = document.querySelector('.player1 .current--score')
const p2CurrentScoreElem = document.querySelector('.player2 .current--score')
const p1TotalScoreElem = document.querySelector('.player1 .player--total-score')
const p2TotalScoreElem = document.querySelector('.player2 .player--total-score')
const p1SectionElem = document.querySelector('.player1')
const p2SectionElem = document.querySelector('.player2')

let p1CurrentScore = 0
let p1AccumulateScore = 0
let p1TotalScore = 0

let p2CurrentScore = 0
let p2AccumulateScore = 0
let p2TotalScore = 0

let playerTurn = true // true : p1, false: p2

const changeColor = () => {
  if (playerTurn) {
    p1SectionElem.style.backgroundColor = '#8de89f'
    p2SectionElem.style.backgroundColor = '#f9f9715d'
  } else {
    p1SectionElem.style.backgroundColor = '#8de89f5a'
    p2SectionElem.style.backgroundColor = '#F9F871'
  }
}

rollDiceBtn.addEventListener('click', () => {
  let currentScore = 0
  currentScore = Math.floor(Math.random() * 6 + 1)

  diceImgElem.src = `http://127.0.0.1:8080/assets/dice0${currentScore}.png`

  diceImgElem.classList.add('active')

  if (currentScore < 3) {
    if (playerTurn) {
      p1CurrentScore = 0
      p1CurrentScoreElem.innerHTML = 0
      p1AccumulateScore = 0
      playerTurn = !playerTurn
    } else if (!playerTurn) {
      p2CurrentScore = 0
      p2CurrentScoreElem.innerHTML = 0
      p2AccumulateScore = 0
      playerTurn = !playerTurn
    }
  } else if (currentScore >= 3) {
    if (playerTurn) {
      p1CurrentScore = currentScore
      p1AccumulateScore += p1CurrentScore
      p1CurrentScoreElem.innerHTML = p1AccumulateScore
    } else if (!playerTurn) {
      p2CurrentScore = currentScore
      p2AccumulateScore += p2CurrentScore
      p2CurrentScoreElem.innerHTML = p2AccumulateScore
    }
  }

  changeColor()

  console.log(playerTurn)

  console.log('p1CurrentScore', p1CurrentScore)
  console.log('p1AccumulateScore', p1AccumulateScore)
  console.log('p1TotalScore', p1TotalScore)

  console.log('p2CurrentScore', p2CurrentScore)
  console.log('p2AccumulateScore', p2AccumulateScore)
  console.log('p2TotalScore', p2TotalScore)
})

holdBtn.addEventListener('click', () => {
  if (playerTurn) {
    p1TotalScore = p1TotalScore + p1AccumulateScore
    p1TotalScoreElem.innerHTML = p1TotalScore
    p1CurrentScoreElem.innerHTML = 0
    p1AccumulateScore = 0
    p1CurrentScore = 0
    playerTurn = !playerTurn
  } else if (!playerTurn) {
    p2TotalScore = p2TotalScore + p2AccumulateScore
    p2TotalScoreElem.innerHTML = p2TotalScore
    p2CurrentScoreElem.innerHTML = 0
    p2AccumulateScore = 0
    p2CurrentScore = 0
    playerTurn = !playerTurn
  }

  changeColor()

  console.log(playerTurn)

  console.log('p1CurrentScore', p1CurrentScore)
  console.log('p1AccumulateScore', p1AccumulateScore)
  console.log('p1TotalScore', p1TotalScore)

  console.log('p2CurrentScore', p2CurrentScore)
  console.log('p2AccumulateScore', p2AccumulateScore)
  console.log('p2TotalScore', p2TotalScore)
})
