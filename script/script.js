document.addEventListener("DOMContentLoaded", function () {
    newsLetter();
    savoirPlus();
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
    let cadre = document.querySelector(".description-commune")

    btn.addEventListener("click", () => {
        cadre.style.overflowY = "auto"
        btn.style.display = "none";
    });
}
