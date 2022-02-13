let number = document.getElementById("number");
let check = document.getElementById("check");
let result = document.getElementById("result");
let range = document.getElementById("range");
let gameNumber = randomInt1(0,100);
console.log(gameNumber);
let minumum = 0;
let max = 100;
let calculator = 3;
result.innerText = calculator;


function newGame() {
    let minumum = 0;
    let max = 100;
    let calculator = 3;
    result.innerText = calculator;
    range.innerText = ""
}

window.addEventListener("load", () => {
    newGame();
})
check.addEventListener("click", () => {
    
    if (+number.value == gameNumber) {
        window.alert("You are win")
        newGame();
    }
    else {
        if (+number.value < gameNumber ) {
            minumum = +number.value;
        } else {
            max = +number.value;
        }
        range.innerText  =(` Write A Number Between ${minumum } And ${max}`);
        calculator -= 1;
    }
    if (calculator > 0 ) {
        result.innerText = `${calculator}`;
    }
    else {
        alert (`Ohhh Sorry You Lost Please Try again
        Number Is ${gameNumber}`)
        newGame();
    }
    number.value = "";

})

function randomInt1(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }