let deck = [];

function createDeck() {
    let tete = ["As", "J", "Q", "K"];
    let symbole = ["♠︎", "♣︎", "♡", "♢"];
    let decompteTete = 1;

    let combinations = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 13; j++) {
            if (j === 0) {
                combinations.push(tete[0] + symbole[i]);
            } else if (j > 0 && j < 10) {
                combinations.push((j + 1) + symbole[i]);
            } else {
                combinations.push(tete[decompteTete] + symbole[i]);
                decompteTete++;
            }
        }
        decompteTete = 1;
    }

    while (combinations.length > 0) {
        const randomIndex = Math.floor(Math.random() * combinations.length);
        const card = combinations.splice(randomIndex, 1)[0];
        deck.push(card);
    }
}

function deal(nbCartes) {
    let pickCard = []
    for (let i = 0; i < nbCartes; i++) {
        pickCard.push(deck.shift())
    }
    console.log(pickCard)
}

function flop() {
    let tour = 0
    let cards = []
    for (let i = 0; i < 3; i++) {
        if (tour == 0) {
            deck.shift()
            for (let j = 0; j < 3; j++) {
                cards.push(deck.shift())
            }
            tour++
        } else if (tour == 1) {
            deck.shift()
            cards.push(deck.shift())
            tour++
        } else if (tour == 2) {
            deck.shift()
            cards.push(deck.shift())
            tour = 0
        }
        console.log(cards)
    }
}

createDeck();

const player1 = deal(2)
const player2 = deal(2)

flop()

// class Card {
//     constructor(value, suit) {
//         this.value = value;
//         this.suit = suit;
//     }

//     toString() {
//         const faceCards = {
//             1: 'A',
//             11: 'J',
//             12: 'Q',
//             13: 'K'
//         };

//         const face = faceCards[this.value] || this.value;
//         const suits = {
//             spades: '♠',
//             clubs: '♣',
//             hearts: '♥',
//             diamonds: '♦'
//         };

//         const suitSymbol = suits[this.suit];
//         return `${face}${suitSymbol}`;
//     }
// }

// class Deck {
//     constructor() {
//         this.cards = [];
//         this.suits = ['spades', 'clubs', 'hearts', 'diamonds'];
//         this.values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//         this.createDeck();
//     }

//     createDeck() {
//         for (let suit of this.suits) {
//             for (let value of this.values) {
//                 const card = new Card(value, suit);
//                 this.cards.push(card);
//             }
//         }
//     }

//     shuffle() {
//         for (let i = this.cards.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
//         }
//     }

//     deal(nbCards) {
//         const dealtCards = [];
//         for (let i = 0; i < nbCards; i++) {
//             dealtCards.push(this.cards.pop());
//         }
//         return dealtCards;
//     }

//     getDeckSize() {
//         return this.cards.length;
//     }
// }

// class Game {
//     constructor() {
//         this.deck = new Deck();
//     }

//     start() {
//         this.deck.shuffle();
//         const player1 = this.deck.deal(2);
//         const player2 = this.deck.deal(2);

//         console.log('Player 1:', player1.map(card => card.toString()));
//         console.log('Player 2:', player2.map(card => card.toString()));

//         this.flop();
//     }

//     flop() {
//         const communityCards = [];
//         for (let i = 0; i < 3; i++) {
//             this.deck.cards.pop(); // Burn a card
//             communityCards.push(this.deck.cards.pop());
//         }

//         console.log('Flop:', communityCards.map(card => card.toString()));
//     }
// }

// const game = new Game();
// game.start();
