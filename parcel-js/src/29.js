// const promise = new Promise((resolve, reject) => {
//     const numbers = [2, 5, 8, 16]
//    const isFulfilld = numbers.every((number)=>{return number % 2 === 0 })
//     if (isFulfilld){
//         resolve('числа в масиві є парнимі')
//     }
//     reject('числа в масиві не є парнимі')
// })

// function checkNumbers(numbers){
//     const promise = new Promise((resolve, reject) => {
//        const isFulfilld = numbers.every((number)=>{return number % 2 === 0 })
//         if (isFulfilld){
//             resolve('числа в масиві є парнимі')
//         }
//         reject('числа в масиві не є парнимі')
//     })
//     return promise
// }


// function makeOrder(dish) {
//     const promise = new Promise((resolve, reject) => {
//       const isFullfild = Math.random() > 0.5
      
//       if (isFullfild) {
//         resolve(`Ваше замовлення: ${dish} - виконано успішно!`)
//       }
//       reject(`Вибачте! В меню такої страви як ${dish} немає`)
//     })
    
//     return promise
//   }
//   makeOrder('pizza')
//     .then(res => console.log(res))
//     .catch(error=>console.log(error))
  

const horses = [ 
  'Secretariat', 
  'Eclipse', 
  'West Australian', 
  'Flying Fox', 
  'Seabiscuit', 
]; 
function getRandomTime(min, max) { 
   return Math.floor(Math.random() * (max - min + 1) + min); 
 } 

const refs = { 
startBtn: document.querySelector('.js-start-race'), 
winnerField: document.querySelector('.js-winner'), 
progressField: document.querySelector('.js-progress'), 
tableBody: document.querySelector('.js-results-table > tbody'), 
}; 

function run(horseName) { 
const randomTime = getRandomTime(1000, 3000) 
const promise = new Promise((resolve) => { 
 setTimeout(()=>{ 
  resolve(horseName) 
 },randomTime)  
}) 
return promise 
} 


const mapMeth = horses.map((horse) => { 
return run(horse) 
}) 
console.log(mapMeth) 

Promise.race(mapMeth).then((result) => {
  console.log(result)
})

Promise.all(mapMeth).then((result) => {
  console.log(result)
})