let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < 5; i++) {
  alert(i)
}


function getSum(arr) {
  let sum = 0;
  for(let i = 0; i < 5; i++){
    if(Array.isArray[i]){
      return sum + arr[i];
    } else{
      return null;
    }
  }
}

let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function getMaxOfArray(Arr) {
  return Math.max.apply(null, Arr);
}