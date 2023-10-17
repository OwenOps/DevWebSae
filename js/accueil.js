document.addEventListener("DOMContentLoaded", function () {
    init();
});

var title;
var txt;

function init() {
    title = document.querySelector('h1');
    txt = "Bienvenue à Chartres Métropole !";

    newsLetter();
    counter();
    typewriter(txt, title);
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

function counter() {
    $('.num').counterUp({
        time: 1200,
    });
}

setTimeout(() => {
    typewriter(txt, 0)
}, 500);

function typewriter(word, index) {
    if (index < word.length) {
        setTimeout(() => {
            title.innerHTML += `<span>${word[index]}</span>`
            typewriter(txt, index + 1)
        }, 100);
    }
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