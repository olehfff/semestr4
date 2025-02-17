let count = 0;

const intervalId = setInterval(() => {
    count++;
    console.log(`Повідомлення №${count}`);

    if (count === 5) {
        clearInterval(intervalId);
        console.log("Таймер зупинено.");
    }
}, 1000);


const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");

let position1 = 0;
let size1 = 50;

let position2 = 350;
let size2 = 50;

const animate = setInterval(() => {
    position1 += 5;
    size1 += 2;
    box1.style.left = position1 + "px";
    box1.style.width = size1 + "px";

    position2 -= 5;
    size2 -= 2;
    box2.style.width = size2 + "px";
    box2.style.height = size2 + "px";

}, 100);