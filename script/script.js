document.addEventListener("DOMContentLoaded", function () {
    newsLetter();
    savoirPlus();
    afficheDescription();
});

function newsLetter() {
    let mail = document.getElementById("input-news");
    let btn = document.getElementById("btn-news");

    btn.addEventListener("click", () => {
        mail.value = "";
    });
}

function savoirPlus() {
    let btn = document.getElementById("btn");
    let cadre = document.getElementById("description-commune");

    btn.addEventListener("click", () => {
        cadre.style.overflowY = "auto";
        // btn.style.display = "none";
    });
}

var ancienChoix;
function afficheDescription() {
    let choix = document.getElementById("choix-agglo");
    ancienChoix = choix.options[choix.selectedIndex].value;

    choix.addEventListener("change", ()=> {
        ancienChoix = choix.options[choix.selectedIndex].value;
        console.log(ancienChoix);
    });
}