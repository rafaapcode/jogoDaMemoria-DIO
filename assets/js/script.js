const cards = document.querySelectorAll(".card");
let hasflipped = false;
let firstCard, secondCard;
let lockBoard = false;
let cardsFliped = 0;
const mensagemFinal = document.querySelector(".memory-game h1");

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
        fimDeJogo();
        disableCards();
        return;
    }

    unflipCard();
}

function fimDeJogo() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        cardsFliped = cardsFliped + 1;

        reloadShowFinalMessage(cardsFliped);

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


function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
}

function unflipCard() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasflipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    });
})();

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});