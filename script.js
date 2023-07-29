const preloader = document.getElementById("preloader");
const body = document.querySelector("body")

window.addEventListener("load", () => {

    preloader.style.opacity = "0";
    preloader.style.display = "none;"
    body.style.overflowY = "scroll";
    

})
