const nrSCdown = document.getElementById("nrSCdown")
const nrSCup = document.getElementById("nrSCup")

let Array1 = []
let Array2 = []
let A1length = 0
let numbersMovement = 0
let boolean = false

const startBTN = document.getElementById("start-btn")

startBTN.addEventListener("click", function(){
    window.location = "./Generation/CGconfig";
});

function numbersGenerate() {
    A1length++
    if (A1length == 50) {
        boolean = true
    }
    if (boolean) {
        numbersMovement += 10
    }
    if (boolean) {
        nrSCup.style.transform = `translateX(${-numbersMovement}px)`
        nrSCdown.style.transform = `translateX(${-numbersMovement}px)`
    }
    let randNum = Math.floor(Math.random() * 9) 
    let randNum2 = Math.floor(Math.random() * 9)
    nrSCup.textContent = Array1.join('') + randNum
    nrSCdown.textContent = Array2.join('') + randNum2
    Array1.push(randNum)
    Array2.push(randNum2)
}

setInterval(numbersGenerate, 15)
    
