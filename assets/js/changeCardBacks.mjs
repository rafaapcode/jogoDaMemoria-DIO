function changeCardBacksOriginal(btn, cardBack) {

    btn.addEventListener("click", () => {
        for (let i in cardBack) {
            const j = Number(i);
            let el = cardBack[j];

            el.setAttribute("src", "/assets/imgs/var.png");
        }
    })

}

function changeCardBacksInterrogacao(btn, cardBack) {

    btn.addEventListener("click", () => {
        for (let i in cardBack) {
            const j = Number(i);
            let el = cardBack[j];

            el.setAttribute("src", "/assets/imgs/cardBacks/interrogacao.png");
        }
    })
}

function changeCardBacksLibertadores(btn, cardBack) {

    btn.addEventListener("click", () => {
        for (let i in cardBack) {
            const j = Number(i);
            let el = cardBack[j];

            el.setAttribute("src", "/assets/imgs/cardBacks/liberta.jpg");
        }
    })
}

function changeCardBacksUCL(btn, cardBack) {

    btn.addEventListener("click", () => {
        for (let i in cardBack) {
            const j = Number(i);
            let el = cardBack[j];

            el.setAttribute("src", "/assets/imgs/cardBacks/UCL.png");
        }
    })
}

function changeCardBacksXbox(btn, cardBack) {

    btn.addEventListener("click", () => {
        for (let i in cardBack) {
            const j = Number(i);
            let el = cardBack[j];

            el.setAttribute("src", "/assets/imgs/cardBacks/xboxController.png");
        }
    })
}

export { changeCardBacksOriginal, changeCardBacksInterrogacao, changeCardBacksLibertadores, changeCardBacksUCL, changeCardBacksXbox };