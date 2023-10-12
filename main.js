const rollDiceBtn = document.querySelector('.roll-dice')
const holdBtn = document.querySelector('.hold')
const newGameBtn = document.querySelector('.new-game')
const diceImgElem = document.querySelector('.dice-img')
const diceImgWrap = document.querySelector('.dice-img--wrap')
const p1CurrentScoreElem = document.querySelector('.player1 .current--score')
const p2CurrentScoreElem = document.querySelector('.player2 .current--score')
const p1TotalScoreElem = document.querySelector('.player1 .player--total-score')
const p2TotalScoreElem = document.querySelector('.player2 .player--total-score')
const p1SectionElem = document.querySelector('.player1')
const p2SectionElem = document.querySelector('.player2')
const p1TitleElem = document.querySelector('.player1 .player--title')
const p2TitleElem = document.querySelector('.player2 .player--title')

let p1CurrentScore = 0
let p1AccumulateScore = 0
let p1TotalScore = 0

let p2CurrentScore = 0
let p2AccumulateScore = 0
let p2TotalScore = 0

let playerTurn = true // true : p1, false: p2

const newGame = () => {
  newGameBtn.addEventListener('click', () => {
    p1CurrentScore = 0
    p1AccumulateScore = 0
    p1TotalScore = 0
    p2CurrentScore = 0
    p2AccumulateScore = 0
    p2TotalScore = 0

    diceImgElem.classList.remove('visible')
    p1CurrentScoreElem.innerHTML = 0
    p2CurrentScoreElem.innerHTML = 0
    p1TotalScoreElem.innerHTML = 0
    p2TotalScoreElem.innerHTML = 0

    p1TitleElem.style.color = 'black'
    p2TitleElem.style.color = 'black'

    playerTurn = true

    changeColor()
  })
}

const changeColor = () => {
  if (p1TotalScore >= 50 || p2TotalScore >= 50) {
    if (!playerTurn) {
      p1SectionElem.style.backgroundColor = 'black'
      p1TitleElem.style.color = 'white'
    } else {
      p2SectionElem.style.backgroundColor = 'black'
      p2TitleElem.style.color = 'white'
    }
  } else {
    if (playerTurn) {
      p1SectionElem.style.backgroundColor = '#8de89f'
      p2SectionElem.style.backgroundColor = '#f9f9715d'
    } else {
      p1SectionElem.style.backgroundColor = '#8de89f5a'
      p2SectionElem.style.backgroundColor = '#F9F871'
    }
  }
}

const gameStart = () => {
  rollDiceBtn.addEventListener('click', () => {
    if (p1TotalScore >= 50 || p2TotalScore >= 50) {
      return
    }

    let currentScore = 0
    currentScore = Math.floor(Math.random() * 6 + 1)

    diceImgElem.src = `http://127.0.0.1:8080/assets/dice0${currentScore}.png`

    diceImgElem.classList.add('visible')
    diceImgElem.classList.add('active')

    diceImgElem.addEventListener('animationend', () => {
      diceImgElem.classList.remove('active')
    })

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
  })

  holdBtn.addEventListener('click', () => {
    if (p1TotalScore >= 50 || p2TotalScore >= 50) {
      return
    }

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
  })
}

newGame()
gameStart()
