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
const inGame = document.querySelector(".in-game")
const startMenu = document.querySelector(".start")
let generalInterval = 0


sleepBtn.addEventListener("click", () => {
    if(Tamagotchi.sleepValue.textContent < 10){
        Tamagotchi.sleepValue.textContent++
    }
})
playBtn.addEventListener("click", () => {
    if (Tamagotchi.playValue.textContent < 10){
    Tamagotchi.playValue.textContent++
    }
})
feedBtn.addEventListener("click", () => {
    if(Tamagotchi.hungerValue.textContent < 10){
        Tamagotchi.hungerValue.textContent++
    }
})

startBtn.addEventListener("click", () => {
    inGame.style.display = "block"
    startMenu.style.display = "none"
    let promptName =prompt("Enter a name for your Tamagotchi")
    Tamagotchi.petName.innerHTML = promptName;
    if (Tamagotchi.petName !== ""){
        let gameTimer = setInterval(()=>{
            generalInterval = generalInterval +1
            if ((generalInterval % 10) === 0 ){
                Tamagotchi.age.innerHTML++
            }
            console.log(generalInterval)
            let decreaseSleep = Tamagotchi.sleepValue.innerHTML = Tamagotchi.sleepValue.innerHTML -1
            let decreasePlay = Tamagotchi.playValue.innerHTML = Tamagotchi.playValue.innerHTML -1
            let decreaseHunger = Tamagotchi.hungerValue.innerHTML = Tamagotchi.hungerValue.innerHTML -1
            if (decreaseSleep === 0 || decreasePlay === 0 || decreaseHunger === 0){
                clearInterval(gameTimer)
            setTimeout(()=>{
                alert("Your Tamagotchi died");
            }, 500)
            }
        },1000)
    }
})






