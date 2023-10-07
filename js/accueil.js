document.addEventListener("DOMContentLoaded", function () {
    init();
    newsLetter();
    counter();
    typewriter();
});
var title;
var txt;

function init() {
    title = document.querySelector('h1');
    txt = "Bienvenue à Chartres Métropole !";
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
        time: 2000,
    });
}

function typewriter(word, index){
    if(index < word.length) {
        setTimeout(() => {
            title.innerHTML += `<span>${word[index]}</span>`
            typewriter(txt, index + 1)
        }, 100);
    }
}

setTimeout(() => {
    typewriter(txt, 0)
}, 500);