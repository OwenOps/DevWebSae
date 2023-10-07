const title = document.querySelector('h1');
const txt = "Bienvenue à Chartres Métropole !"

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