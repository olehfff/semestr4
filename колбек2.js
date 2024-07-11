const button = document.getElementById('helloButton');
        button.addEventListener('click', () => {
            alert('Hello World!');
        });


        const buttonPlayAgain = document.querySelector(".button");
console.log(buttonPlayAgain)

const numberGess = document.querySelector(".number");
console.log(numberGess)

function getRandomNumber() {
    return Math.round(Math.random() * (100 - 1) + 1)
}
getRandomNumber()

function getCheckNumbers() {
const inputWellYou = numberGess.value
console.log(inputWellYou)
}
getCheckNumbers()
