document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [{
        name: 'luffy',
        img: './images/luffy_2.png',
    }, {
        name: 'goku',
        img: './images/goku_1.png'
    }, {
        name: 'deku',
        img: './images/deku_1.png'
    }, {
        name: 'asta',
        img: './images/asta_1.png'
    }, {
        name: 'naruto',
        img: './images/naruto_1.png'
    }, {
        name: 'gon',
        img: './images/gon_1.png'
    }, {
        name: 'luffy',
        img: './images/luffy_2.png'
    }, {
        name: 'goku',
        img: './images/goku_1.png'
    }, {
        name: 'deku',
        img: './images/deku_1.png'
    }, {
        name: 'asta',
        img: './images/asta_1.png'
    }, {
        name: 'naruto',
        img: './images/naruto_1.png'
    }, {
        name: 'gon',
        img: './images/gon_1.png'
    }];


    const grid = document.querySelector('.grid');
    let cardChosen = [];
    let cardChosenId = [];
    let cardWon = [];
    let score = document.getElementById('score');

    //randomize the card array
    cardArray.sort(() => 0.5 - Math.random());

    //create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', './images/cover.png');
            card.setAttribute('data-id', i);
            card.setAttribute('flag', '1');
            card.classList.add('img-container');
            card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }

    //flipcard function
    function flipcard() {
        let cardId = this.getAttribute('data-id');
        let flag = this.getAttribute('flag');
        if (flag === '1') {
            cardChosen.push(cardArray[cardId].name);
            cardChosenId.push(cardId);
            this.setAttribute('src', cardArray[cardId].img);
            if (cardChosen.length === 2) {
                setTimeout(checkMatch, 500);
            }
        }
    }

    //check for match
    function checkMatch() {
        let cards = document.querySelectorAll('img');
        let option1 = cardChosenId[0];
        let option2 = cardChosenId[1];
        if (option1 === option2) {
            cards[option2].setAttribute('src', './images/cover.png');
        } else if (cardChosen[0] === cardChosen[1]) {
            // alert("Matched !!!!!!!!!!!!!");
            cards[option1].setAttribute('flag', '0');
            cards[option2].setAttribute('flag', '0');
            cards[option1].style.opacity = '0';
            cards[option2].style.opacity = '0';
            cardWon.push(option1);
            cardWon.push(option2);
            score.textContent = `${(cardWon.length/2)}`;
            if (score.textContent === `${cardArray.length / 2}`) {
                score.innerHTML += `<br>Congratulations! You have won`;
                // window.location.reload();
            }
        } else {
            // alert("Not matched");
            cards[option1].setAttribute('src', './images/cover.png');
            cards[option2].setAttribute('src', './images/cover.png');
        }
        cardChosen = []
        cardChosenId = []
    }

    createBoard();

    let restart = document.getElementById('restart');
    restart.addEventListener('click', () => {
        window.location.reload();
    })

});