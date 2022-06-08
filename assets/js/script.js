import { shuffle } from "./embaralhar.mjs";
import { changeMode } from "./changeMode.mjs";


// ChangeMode Elements
const body = document.getElementsByTagName("body")[0];
const actualModeDiv = document.querySelector(".actualMode");
const btn = document.querySelector("#btn");
const actualModeParagraph = document.querySelector(".actualMode p");
const cardFront = document.querySelector(".card .card-front");

// -------------------------------------------------------------

const cards = document.querySelectorAll(".card");
let hasflipped = false;
let firstCard, secondCard;
let lockBoard = false;
let cardsFliped = 0;
const mensagemFinal = document.querySelector(".memory-game h1");

changeMode(btn, actualModeParagraph, body, actualModeDiv, cards);

function flipCard() {
    if (lockBoard) return;

    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasflipped) {
        hasflipped = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasflipped = false;

    checkForMath();
}

function checkForMath() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        finishGame();
        disableCards();
        return;
    }

    unflipCard();
}

function unflipCard() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetBoard();
    }, 1000);
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
}


function resetBoard() {
    [hasflipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

shuffle();


function finishGame() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        cardsFliped = cardsFliped + 1;

        return reloadShowFinalMessage(cardsFliped);

    }
}

function reloadShowFinalMessage(cardsFliped) {
    if (cardsFliped === 6) {
        setTimeout(() => {

            mensagemFinal.style.display = 'block';

            setTimeout(() => {
                location.reload();
            }, 1500);
        }, 1000);
    }
}

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});