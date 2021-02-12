/*********/
/*Global Variables*/
const gameBoard = document.querySelector('.game-board')
let gameCard = [
  {
    name: 'saturn',
    img: 'game_images/1.PNG'
  },
  {
    name: 'beaming face',
    img: 'game_images/2.PNG'
  },
  {
    name: 'monkey no hear',
    img: 'game_images/3.PNG'
  },
  {
    name: 'monkey no see',
    img: 'game_images/4.PNG'
  },
  {
    name: 'halo',
    img: 'game_images/5.PNG'
  },
  {
    name: 'octopus',
    img: 'game_images/6.PNG'
  },
  {
    name: 'woozy face',
    img: 'game_images/7.PNG'
  },
  {
    name: 'money face',
    img: 'game_images/8.PNG'
  },
  {
    name: 'code ghost',
    img: 'game_images/9.jpg'
  },
  {
    name: 'Call Me Hand',
    img: 'game_images/10.PNG'
  },
  {
    name: 'Victory Hand',
    img: 'game_images/11.PNG'
  },
  {
    name: 'Technologist',
    img: 'game_images/12.PNG'
  },
  {
    name: 'Ninja',
    img: 'game_images/13.PNG'
  },
  {
    name: 'Wizard',
    img: 'game_images/14.PNG'
  },
  {
    name: 'Boy bow',
    img: 'game_images/15.PNG'
  },
  {
    name: 'Dancing Lady',
    img: 'game_images/16.PNG'
  },
  {
    name: 'Alien',
    img: 'game_images/17.PNG'
  },
  {
    name: 'Mask Face',
    img: 'game_images/18.PNG'
  }
]

let cardsPicked = []
let cardIndexes = []
let cardsWonArr = []
let cardsAttempts = []
let matchCounter = document.getElementById('match-counter')
let attemptCounter =  document.getElementById('attempts-counter')
let restartButton = document.getElementById('restart')
const wonMessage = document.createElement('div')
wonMessage.id = 'you-won'
wonMessage.innerHTML = "YOU WON!</br>Press restart button</br>to play agian "
wonMessage.style.opacity = '100'

/*********/
/*Functions*/
const createBoard = () => {
  let copy1 = gameCard
  let matchArr = gameCard.concat(copy1)
  gameCard = shuffle(matchArr)
  gameCard.forEach((obj, index) => {
    let div = document.createElement('div')
    div.className = 'cell'
    div.id = `${index}`
    gameBoard.appendChild(div)
  })
}
const shuffle = (arr) => {
  let shuffleArr = arr
  let currentIndex = arr.length
  let temporaryValue, randomIndex
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = shuffleArr[currentIndex]
    shuffleArr[currentIndex] = shuffleArr[randomIndex]
    shuffleArr[randomIndex] = temporaryValue
  }
  return shuffleArr
}

const handleClick = (event) => {
  const cardIndex = event.target.id
  flipCard(cardIndex)
}

const flipCard = (cardIndex) => {
  cell = document.getElementById(cardIndex)
  card = document.createElement('img')

  /*Style of Card */
  card.id = cardIndex
  card.className = 'animate__animated animate__flipInY'
  card.style.width = '100%'
  card.style.height = '100%'
  card.style.backgroundColor = 'white'
  card.style.border = '10px'
  card.style.borderRadius = '4px'
  cell.removeEventListener('click', handleClick)

  card.src = gameCard[cardIndex].img
  cell.appendChild(card)
  cardsPicked.push(gameCard[cardIndex].img)
  cardIndexes.push(cardIndex)
  if (cardsPicked.length === 2) {
    checkMatch()
  }
}

const checkMatch = () => {
  let card1 = document.getElementById(cardIndexes[0])
  let card2 = document.getElementById(cardIndexes[1])

  if (cardsPicked[0] === cardsPicked[1]) {
    console.log('its a match!')
    cardsWonArr.push(cardsPicked)
    cardsPicked = []
    card1.style.borderColor = 'green'
    card2.style.borderColor = 'green'
    setTimeout(() => {
      card1.style.opacity = '0'
      card2.style.opacity = '0'
      card1.removeEventListener('click', handleClick)
      card2.removeEventListener('click', handleClick)
    }, 1500)
    matchCounter.innerText = cardsWonArr.length
    if(cardsWonArr.length === 18){
    }
  } else {
    console.log('try again')
    cardsAttempts.push(cardsPicked)
    cardsPicked = []
    card1.style.borderColor = 'red'
    card2.style.borderColor = 'red'
    setTimeout(() => {
      card1.addEventListener('click', handleClick)
      card2.addEventListener('click', handleClick)
      card1.removeChild(card1.childNodes[0])
      card2.removeChild(card2.childNodes[0])
      card1.style.backgroundColor = '#1aaca5'
      card2.style.backgroundColor = '#1aaca5'
      card1.style.borderColor = 'white'
      card2.style.borderColor = 'white'
    }, 1600)
    attemptCounter.innerText = cardsAttempts.length
  }
  cardIndexes = []
}




const restartGame = () => {
  location.reload();
}

/*********/
/*Event Listeners*/
document.addEventListener('DOMContentLoaded', () => {
  createBoard()
  document.querySelectorAll('.cell').forEach(function (cell) {
    cell.addEventListener('click', handleClick)
  })
})

restartButton.addEventListener('click', restartGame)

/*********/
/*Additional Features to work on*/
// const wonMessage = document.createElement('div')
// wonMessage.id = 'you-won'
// wonMessage.innerHTML = "YOU WON!</br>Press restart button</br>to play agian "
// wonMessage.style.opacity = '100'
