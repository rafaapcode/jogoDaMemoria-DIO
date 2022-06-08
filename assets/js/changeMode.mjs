function changeMode(btn, text, body, actualMode, cardFrontBack) {

    const darkMode = "Dark Mode";
    const lightMode = "Light Mode";

    btn.addEventListener("click", () => {
        changetext();
        changeStyles();
    });


    const changetext = () => {
        actualMode.classList.toggle("lightModeText");
        let haveClass = actualMode.classList.contains("lightModeText");
        if (haveClass) {
            text.innerHTML = lightMode + " ON";
        } else {
            text.innerHTML = darkMode + " ON";
        }
    };

    const changeStyles = () => {
        body.classList.toggle("lightModeBackground");

        cardFrontBack.forEach(card => {
            card.classList.toggle("darkMode");
        });
    };

}


export { changeMode };