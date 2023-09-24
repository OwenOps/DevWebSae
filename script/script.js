document.addEventListener("DOMContentLoaded", function () {

    function newsLetter() {
        let mail = document.getElementById("input-news");
        let btn = document.getElementById("btn-news");

        btn.addEventListener("click", () => {
            mail.value = "";
        });
    }

    newsLetter();
});
