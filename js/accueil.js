document.addEventListener("DOMContentLoaded", function () {
    newsLetter();
    counter();
});

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