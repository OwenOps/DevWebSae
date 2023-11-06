document.addEventListener("DOMContentLoaded", function () {
    init();
});

var title;
const txt = "Bienvenue à Chartres Métropole !";

function init() {
    title = document.querySelector('h1');

    counter();
    typewriter(txt, title);
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