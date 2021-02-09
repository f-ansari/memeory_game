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
// card.src = '/game_images/card_back.JPEG'
//  console.log(gameCard[0].flipped)

/*********/
/*Functions*/
const handleClick = (event) => {
  const cardIndex = event.target.id
  // const cardIndex = 0

  if (gameCard[cardIndex].flipped === false) {
    console.log('true')
    flipFront(cardIndex)
    gameCard[cardIndex].flipped = true
  } else {
    console.log('false')
    flipBack(cardIndex)
    gameCard[cardIndex].flipped = false
  }
}

const flipFront = (cardIndex) => {
  console.log(cardIndex)
  card.style.width = '100%'
  card.src = gameCard[cardIndex].img
  card.id = cardIndex
  cell.appendChild(card)
  // gameCard[cardIndex].flipped = true
}

const flipBack = (cardIndex) => {
  console.log(cardIndex)
  // let card = document.createElement('img')
  card.style.width = '100%'
  card.src = '/game_images/card_back.JPEG'
  card.id = cardIndex
  cell.appendChild(card)
  // gameCard[cardIndex].flipped = false
}

// const flipCard = (cardIndex) => {
//   console.log(cardIndex)
//   let card = document.createElement('img')
//   card.style.width = '100%'
//   if (gameCard[cardIndex].flipped == false) {
//     gameCard[cardIndex].flipped = true
//     card.src = gameCard[cardIndex].img
//     cell.appendChild(card)
//     console.log('if')
//   } else {
//     gameCard[cardIndex].flipped = false
//     card.src = '/game_images/card_back.JPEG'
//     cell.appendChild(card)
//     console.log('else')
//   }
// }

// console.log(gameCard[0].img)
// flipCard(0)
// console.log(gameCard[0].img)
// flipCard(0)
// console.log(gameCard[0].img)
// flipCard(0)
// console.log(gameCard[0].img)
/*********/
/*Event Listeners*/
document.querySelectorAll('.cell').forEach(function (cell) {
  cell.addEventListener('click', handleClick)
})
