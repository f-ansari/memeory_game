// for flipping cards

// if (gameCard[cardIndex].flipped === false) {
//   console.log('true')
//   flipFront(cardIndex)
//   gameCard[cardIndex].flipped = true
// } else {
//   console.log('false')
//   flipBack(cardIndex)
//   gameCard[cardIndex].flipped = false
// }

// const flipFront = (cardIndex) => {
//   console.log(cardIndex)
//   card.style.width = '100%'
//   card.style.height = '100%'
//   card.src = gameCard[cardIndex].img
//   card.id = cardIndex
//   cell.appendChild(card)
// }

// const flipBack = (cardIndex) => {
//   console.log(cardIndex)
//   card.style.width = '100%'
//   card.src = '/game_images/card_back.JPEG'
//   card.id = cardIndex
//   cell.appendChild(card)
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 8]
// let easy1 = num.slice(0,4)
// let easy2 = easy1
// let matchArr = easy1.concat(easy2)

// const shuffle = (arr) => {
//   let shuffleArr = arr
//   let currentIndex = arr.length
//   let temporaryValue, randomIndex;
//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex)
//     currentIndex -= 1
//     temporaryValue = shuffleArr[currentIndex]
//     shuffleArr[currentIndex] = shuffleArr[randomIndex]
//     shuffleArr[randomIndex] = temporaryValue
//   }
//   return shuffleArr
// }
// console.log(shuffle(matchArr))
