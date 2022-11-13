let Tamagotchi = {
    petName: document.querySelector("#name"),
    sleepValue: document.querySelector(".sleep-value"),
    playValue: document.querySelector(".boredom-value"),
    hungerValue: document.querySelector(".hunger-value"),
    age: document.querySelector("#age-value"),
    
}
console.log(Tamagotchi)
const sleepBtn = document.querySelector("#sleep")

const playBtn = document.querySelector("#play")


const feedBtn = document.querySelector("#feed")

const startBtn = document.querySelector("#start")
const hide = document.querySelector("#hide")
const startMenu = document.querySelector(".start")
let generalInterval = 0
let nameInput = document.querySelector("#name-input")
let gameOver = document.querySelector("#game-over")
let playAgain = document.querySelector("#play-again")


sleepBtn.addEventListener("click", () => {
    if(Tamagotchi.sleepValue.textContent > 0){
        Tamagotchi.sleepValue.textContent--
    }
})
playBtn.addEventListener("click", () => {
    if (Tamagotchi.playValue.textContent > 0){
    Tamagotchi.playValue.textContent--
    }
})
feedBtn.addEventListener("click", () => {
    if(Tamagotchi.hungerValue.textContent > 0){
        Tamagotchi.hungerValue.textContent--
    }
})

startBtn.addEventListener("click", () => {
    hide.style.display = "block"
    startMenu.style.display = "none"
    Tamagotchi.petName.innerHTML = nameInput.value;
    if (Tamagotchi.petName !== ""){
        let gameTimer = setInterval(()=>{
            generalInterval = generalInterval +1
            if ((generalInterval % 10) === 0 ){
                Tamagotchi.age.innerHTML++
            }
            let decreaseSleep = Tamagotchi.sleepValue.innerHTML++
            let decreasePlay = Tamagotchi.playValue.innerHTML++
            let decreaseHunger = Tamagotchi.hungerValue.innerHTML++
            if (decreaseSleep > 9 || decreasePlay > 9  || decreaseHunger > 9){
                clearInterval(gameTimer)
                gameOver.style.display = "inline"
                playAgain.style.display = "block"

            }
        },1000)
    }
})






