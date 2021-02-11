/*********/
/*Global Variables*/
let isGameActive = true
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
  }
]
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

let cardsPicked = []
let cardIndexes = []
const flipCard = (cardIndex) => {
  cell = document.getElementById(cardIndex)
  card = document.createElement('img')
  /*Style of Card */
  card.id = cardIndex
  card.style.width = '100%'
  card.style.height = '100%'
  card.style.borderRadius = '10px solid white'
  // cell.removeEventListener('click', handleClick)

  card.src = gameCard[cardIndex].img
  cell.appendChild(card)
  cardsPicked.push(gameCard[cardIndex].img)
  cardIndexes.push(cardIndex)
  if (cardsPicked.length === 2) {
    checkMatch()
  }
}
cardsWonArr = []

const checkMatch = () => {
  let card1 = document.getElementById(cardIndexes[0])
  let card2 = document.getElementById(cardIndexes[1])

  if (cardsPicked[0] === cardsPicked[1]) {
    console.log('its a match!')
    cardsWonArr.push(cardsPicked)
    cardsPicked = []
    setTimeout(() => {
      card1.style.opacity = '0'
      card2.style.opacity = '0'
      // // card2.style.opacity = '0'
      card1.removeEventListener('click', handleClick)
      card2.removeEventListener('click', handleClick)
    }, 1000)
  } else {
    console.log('try again')
    cardsPicked = []
    setTimeout(() => {
      card1.removeChild(card1.childNodes[0])
      card2.removeChild(card2.childNodes[0])
    }, 1000)
  }
  cardIndexes = []
}
/*********/
/*Event Listeners*/
document.addEventListener('DOMContentLoaded', () => {
  createBoard()
  document.querySelectorAll('.cell').forEach(function (cell) {
    cell.addEventListener('click', handleClick)
  })
})
