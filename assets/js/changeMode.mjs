function changeMode(btn, text, body, actualMode) {

    const darkMode = "Dark Mode";
    const lightMode = "Light Mode";

    btn.addEventListener("click", () => {
        changetext();
        changeStyles();
    });


    const changetext = () => {
        text.classList.toggle("TextoAdd");
        let haveClass = text.classList.contains("darkMode");
        if (haveClass) {
            text.innerHTML = lightMode + " ON";
            actualMode.style.color = "black";
        } else {
            text.innerHTML = darkMode + " ON";
            actualMode.style.color = "white";
        }
    };


    const changeStyles = () => {
        body.style.backgroundColor = "white";
    };

}


export { changeMode };