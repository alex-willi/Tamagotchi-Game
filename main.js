const sleepBtn = document.querySelector("#sleep")
let sleepValue = document.querySelector(".sleep-value")

const playBtn = document.querySelector("#play")
const playValue = document.querySelector(".boredom-value")


const feedBtn = document.querySelector("#feed")
const hungerValue = document.querySelector(".hunger-value")

const startBtn = document.querySelector("#start")
const inGame = document.querySelector(".in-game")
const startMenu = document.querySelector(".start")
let age = document.querySelector("#age-value")
let generalInterval = 0


sleepBtn.addEventListener("click", () => {
    if(sleepValue.textContent < 10){
        sleepValue.textContent++
    }
})
playBtn.addEventListener("click", () => {
    if (playValue.textContent < 10){
    playValue.textContent++
    }
})
feedBtn.addEventListener("click", () => {
    if(hungerValue.textContent < 10){
        hungerValue.textContent++
    }
})

startBtn.addEventListener("click", () => {
    inGame.style.display = "block"
    startMenu.style.display = "none"
    let petName =prompt("Enter a name for your Tamagotchi")
    document.querySelector("#name").innerHTML = petName;
    if (petName !== ""){
        let gameTimer = setInterval(()=>{
            generalInterval = generalInterval +1
            if ((generalInterval % 10) === 0 ){
                age.innerHTML++
            }
            console.log(generalInterval)
            let decreaseSleep = sleepValue.innerHTML = sleepValue.innerHTML -1
            let decreasePlay = playValue.innerHTML = playValue.innerHTML -1
            let decreaseHunger = hungerValue.innerHTML = hungerValue.innerHTML -1
            if (decreaseSleep === 0 || decreasePlay === 0 || decreaseHunger === 0){
                clearInterval(gameTimer)
            setTimeout(()=>{
                alert("Your Tamagotchi died");
            }, 500)
            }
        },1000)
    }
})






