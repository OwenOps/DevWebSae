document.addEventListener("DOMContentLoaded", function () {
    init()
});

var ancienChoix;
var cadre;

function init() {
    ancienChoix = "commune";
    cadre = document.getElementById("description-commune");

    newsLetter();
    afficheDescription();
}

function newsLetter() {
    let mail = document.getElementById("input-news");
    let btn = document.getElementById("btn-news");

    btn.addEventListener("click", () => {
        mail.value = "";
    });
}

function estValeurCommune(nouveauChoix) {
    return nouveauChoix == document.getElementById("choix-agglo").options[0].value;
}

function afficheDescription() {
    let choix = document.getElementById("choix-agglo");

    choix.addEventListener("change", () => {
        let nouveauChoix = choix.options[choix.selectedIndex].value;

        // Masquez les anciennes valeurs.
        let anciennesValeurs = document.getElementsByClassName(ancienChoix);
        for (let i = 0; i < anciennesValeurs.length; i++) {
            anciennesValeurs[i].style.display = "none";
        }

        let nouvellesValeurs = document.getElementsByClassName(nouveauChoix);
        for (let i = 0; i < nouvellesValeurs.length; i++) {
            nouvellesValeurs[i].style.display = "block";
        }
        
        cadre.scrollTop = 0;;
        ancienChoix = nouveauChoix;
    });
}