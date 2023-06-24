const cardArray = [
    {
        name: 'cat1',
        img: 'images/cat1.png'
    },
    {
        name: 'cat2',
        img: 'images/cat2.png'
    },
    {
        name: 'cat3',
        img: 'images/cat3.png'
    },
    {
        name: 'cat4',
        img: 'images/cat4.png'
    },
    {
        name: 'cat5',
        img: 'images/cat5.png'
    },
    {
        name: 'cat6',
        img: 'images/cat6.png'
    },
    {
        name: 'cat1',
        img: 'images/cat1.png'
    },
    {
        name: 'cat2',
        img: 'images/cat2.png'
    },
    {
        name: 'cat3',
        img: 'images/cat3.png'
    },
    {
        name: 'cat4',
        img: 'images/cat4.png'
    },
    {
        name: 'cat5',
        img: 'images/cat5.png'
    },
    {
        name: 'cat6',
        img: 'images/cat6.png'
    }  
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', './images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log('check for match')
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('You have clicked the same image!')
    }
    if(cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src','images/black.png')
        cards[optionTwoId].setAttribute('src','images/black.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('Try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations you found them all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length == 2) {
        setTimeout(checkMatch, 500)
    }

}
