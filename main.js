const sleepBtn = document.querySelector("#sleep")
let sleepValue = document.querySelector(".sleep-value")

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
    let petName =prompt("Enter a name for your Tamagotchi")
    document.querySelector("#name").innerHTML = petName;
    if (petName !== ""){
        let gameTimer = setInterval(()=>{
            let decreaseSleep = sleepValue.innerHTML = sleepValue.innerHTML -1
            let decreasePlay = playValue.innerHTML = playValue.innerHTML -1
            let decreaseHunger = hungerValue.innerHTML = hungerValue.innerHTML -1
            if (decreaseSleep === 0 || decreasePlay === 0 || decreaseHunger === 0){
            clearInterval(gameTimer)
            }
        },1000)
    }
})






