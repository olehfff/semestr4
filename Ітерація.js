let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < 5; i++) {
  alert(i)
}

 let sum = 0;
function getSum() {

  for(let i = 0; i < 5; i++){
      sum += arr[i];
  }
    return sum;
}
getSum();

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function getMaxOfArray(arr2) {
  return Math.max.apply(null, arr2);
}