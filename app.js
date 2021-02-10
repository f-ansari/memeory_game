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
  console.log(cardIndex)
  cell = document.getElementById(cardIndex)
  card = document.createElement('img')

  /*Style of Card */
  card.id = cardIndex
  card.style.width = '100%'
  card.style.height = '100%'
  card.style.borderRadius = '10px'

  flipCard(cardIndex, cell, card)
  // checkMatch(cardIndex, cell, card)
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
    cardsPicked.push(gameCard[cardIndex].name)
    if (cardsPicked.length == 2) {
      console.log(cardsPicked)
      // checkMatch()
      setTimeout(checkMatch(), 500000)
    }
  } else if (gameCard[cardIndex].flipped === true) {
    console.log(cell.lastElementChild)
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
    alert('its a match!')
    cardsWonArr.push(cardsPicked)
    // while(cardsPicked > 0){
    //   cardsPicked.pop()
    // }
    cardsPicked = []
  } else {
    alert('try again')
  }
}

/*********/
/*Event Listeners*/
document.querySelectorAll('.cell').forEach(function (cell) {
  cell.addEventListener('click', handleClick)
})
