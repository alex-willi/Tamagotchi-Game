const sleepBtn = document.querySelector("#sleep")
const sleepValue = document.querySelector(".sleep-value")

const playBtn = document.querySelector("#play")
const playValue = document.querySelector(".boredom-value")


const feedBtn = document.querySelector("#feed")
const hungerValue = document.querySelector(".hunger-value")

const startBtn = document.querySelector("#start")
const inGame = document.querySelector(".in-game")
const startMenu = document.querySelector(".start")


sleepBtn.addEventListener("click", () => {
sleepValue.textContent++
})
playBtn.addEventListener("click", () => {
    playValue.textContent++
})
feedBtn.addEventListener("click", () => {
    hungerValue.textContent++
})

startBtn.addEventListener("click", () => {
    inGame.style.display = "block"
    startMenu.style.display = "none"
    
})