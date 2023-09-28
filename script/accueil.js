document.addEventListener("DOMContentLoaded", function () {
    init()
});

var clics;
var ancienChoix;
var btn;
var cadre;

function init() {
    clics = 0;
    ancienChoix = "commune";
    btnD = document.getElementById("btn");
    cadre = document.getElementById("description-commune");

    newsLetter();
    savoirChoix();
    afficheDescription();
}

function newsLetter() {
    let mail = document.getElementById("input-news");
    let btn = document.getElementById("btn-news");

    btn.addEventListener("click", () => {
        mail.value = "";
    });
}

function savoirPlus() {
    cadre.style.overflowY = "auto";
    cadre.appendChild(btnD)
    btnD.style.marginBottom = "15px"
    btnD.querySelector("span").textContent = "Voir moins"

    document.getElementById("img-fleche").src = "../img/fleche-haut.png"
}

function savoirMoins() {
    let boiteBtn = document.getElementById("boite-bouton")

    cadre.style.overflowY = "hidden"; 
    cadre.scrollTop = 0; 
    boiteBtn.appendChild(btnD);
    btnD.querySelector("span").textContent = "En savoir plus";

    document.getElementById("img-fleche").src = "../img/fleche-bas.png"
}

function savoirChoix() {
    btnD.addEventListener("click", () => {
        clics++;
        if (clics % 2 == 1) {
            savoirPlus();
        } 
        else 
        {
            savoirMoins();
        }
    })
}

function estValeurCommune(nouveauChoix) {
    return nouveauChoix == document.getElementById("choix-agglo").options[0].value;
}

function pasClique() {
    return !(document.getElementById("boite-bouton").contains(btnD))
}

function afficheDescription() {
    let choix = document.getElementById("choix-agglo");

    choix.addEventListener("change", () => {
        let nouveauChoix = choix.options[choix.selectedIndex].value;

        //Si la personne ne clique pas sur le bouton et qu'il change directement de valeur
        if (pasClique())
            clics++;

        if (estValeurCommune(nouveauChoix))
            btnD.style.display = "none";
        else 
            btnD.style.display = "block";

        // Masquez les anciennes valeurs.
        let anciennesValeurs = document.getElementsByClassName(ancienChoix);
        for (let i = 0; i < anciennesValeurs.length; i++) {
            anciennesValeurs[i].style.display = "none";
        }

        let nouvellesValeurs = document.getElementsByClassName(nouveauChoix);
        for (let i = 0; i < nouvellesValeurs.length; i++) {
            nouvellesValeurs[i].style.display = "block";
        }
        
        ancienChoix = nouveauChoix;
        savoirMoins();
    });
}