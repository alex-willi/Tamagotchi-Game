const sleepBtn = document.querySelector("#sleep")
const sleepValue = document.querySelector(".sleep-value")

const playBtn = document.querySelector("#play")
const playValue = document.querySelector(".boredom-value")


const feedBtn = document.querySelector("#feed")
const hungerValue = document.querySelector(".hunger-value")


sleepBtn.addEventListener("click", () => {
sleepValue.textContent++
})
playBtn.addEventListener("click", () => {
    playValue.textContent++
})
feedBtn.addEventListener("click", () => {
    hungerValue.textContent++
})