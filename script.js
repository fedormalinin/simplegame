const hamsterHero = document.getElementById("hamsterhero")
const mole = document.getElementById("mole")

document.addEventListener("keydown", function(event) {
    jump()
})

function jump() {
    if (hamsterHero.classList != "jump") {
        hamsterHero.classList.add("jump")
    }
    setTimeout(function() {
        hamsterHero.classList.remove("jump")
    }, 1000)

}


let isAlive = setInterval (function() {
    let hamsterTop = parseInt(window.getComputedStyle(hamsterHero).getPropertyValue("top"))
    let moleLeft = parseInt(window.getComputedStyle(mole).getPropertyValue("left"))

    if (moleLeft < 50 && moleLeft > 0 && hamsterTop >= 140) {
        alert("GAME OVER")
    }
}, 10)