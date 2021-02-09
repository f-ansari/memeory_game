// console.log('hello world')

/*********/
/*Global Variables*/
let isGameActive = true
let gameCard = [
  {
    name: 'bfwse',
    img: '/game_images/bfwse.JPEG',
    flipped: false
  }
]
const cell = document.querySelector('.cell')
let card = document.createElement('img')


/*********/
/*Functions*/
const handleClick = (event) => {
  const cardIndex = event.target.id

  flipCard(cardIndex)
}

const flipCard = (cardIndex) => {
  card.style.width = '100%'
  card.style.height = '100%'
  card.id = cardIndex
  if (gameCard[cardIndex].flipped == false) {
    gameCard[cardIndex].flipped = true
    card.src = gameCard[cardIndex].img
    cell.appendChild(card)
  } else {
    gameCard[cardIndex].flipped = false
    card.src = '/game_images/card_back.JPEG'
    cell.appendChild(card)
  }
}

/*********/
/*Event Listeners*/
document.querySelectorAll('.cell').forEach(function (cell) {
  cell.addEventListener('click', handleClick)
})
