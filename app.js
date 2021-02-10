/*********/
/*Global Variables*/
let isGameActive = true
let gameCard = [
  {
    name: 'bfwse',
    img: '/game_images/bfwse.JPEG',
    flipped: false
  },
  {
    name: 'bfwse',
    img: '/game_images/bfwse.JPEG',
    flipped: false
  },
  {
    name: 'halo',
    img: '/game_images/halo.JPEG',
    flipped: false
  },
  {
    name: 'halo',
    img: '/game_images/halo.JPEG',
    flipped: false
  }
]

/*********/
/*Functions*/
const handleClick = (event) => {
  const cardIndex = event.target.id
  cell = document.getElementById(cardIndex)
  card = document.createElement('img')

  /*Style of Card */
  card.id = cardIndex
  card.style.width = '100%'
  card.style.height = '100%'
  card.style.borderRadius = '10px solid white'

  flipCard(cardIndex, cell, card)
}

cardsPicked = []

const flipCard = (cardIndex, cell, card) => {
  if (gameCard[cardIndex].flipped === false) {
    gameCard[cardIndex].flipped = true
    if (cell.lastElementChild) {
      cell.removeChild(cell.lastElementChild)
    }
    card.src = gameCard[cardIndex].img
    cell.appendChild(card)
    cardsPicked.push(gameCard[cardIndex].img)
    if (cardsPicked.length == 2) {
      setTimeout(() => {
        checkMatch()
      }, 900)
    }
  } else if (gameCard[cardIndex].flipped === true) {
    cardsPicked.pop()
    cell.removeChild(cell.lastElementChild)
    gameCard[cardIndex].flipped = false
    card.src = '/game_images/card_back.JPEG'
    cell.appendChild(card)
  }
}

cardsWonArr = []

const checkMatch = () => {
  let cardOnePicked = cardsPicked[0]
  let cardTwoPicked = cardsPicked[1]

  if (cardOnePicked === cardTwoPicked) {
    console.log('its a match!')
    cardsWonArr.push(cardsPicked)
    cardsPicked = []
    // card.style = 'white'
  } else {
    console.log('try again')
  }
}

/*********/
/*Event Listeners*/
document.querySelectorAll('.cell').forEach(function (cell) {
  cell.addEventListener('click', handleClick)
})
