document.addEventListener("DOMContentLoaded", function () {
    init();
});

function init() {
    newsLetter();
    toggleNav();
    remonter();
}

function newsLetter() {
    let mail = document.getElementById("input-news");
    let btn = document.getElementById("btn-news");

    btn.addEventListener("click", () => {
        mail.value = "";
    });
}

function toggleNav() {
    const hamburgerButton = document.querySelector(".conteneur-toggler")
    const navigation = document.querySelector(".conteneur")

    hamburgerButton.addEventListener("click", () => {

        hamburgerButton.classList.toggle("active")
        navigation.classList.toggle("active")
    });
}

function remonter() {
    const btn = document.querySelector('#remonter');

    btn.addEventListener('click', () => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })

    })
}

window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    var hamburger = document.querySelector(".conteneur-toggler");
    navbar.classList.toggle("sticky", window.scrollY > 10);
    hamburger.classList.toggle("sticky", window.scrollY > 10);
})
