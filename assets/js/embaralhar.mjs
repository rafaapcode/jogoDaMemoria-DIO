const cards = document.querySelectorAll(".card");

function shuffle() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    });
};

export { shuffle };