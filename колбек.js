const buttonPlayAgain = document.querySelector(".button");
console.log(buttonPlayAgain);

const search = document.querySelector('img');

const numberGuess = document.querySelector(".number");
console.log(numberGuess);
 
let number = getRandomNumber();
    
function getRandomNumber() {
    const check = Math.round(Math.random() * (100 - 1) + 1);
    console.log(check);
};

function getCheckNumbers() {
    const inputValue = numberGuess.value;
    console.log(inputValue);
    console.log('hoidht');
    if(inputValue == getRandomNumber()) {
        alert('користувач виграв')
    } else {
        alert('користувач програв')
    }
    numberGuess.value = ''
}

search.addEventListener('click', getCheckNumbers)