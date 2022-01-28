const myArr = [10, 20, 30];
const len = myArr.length;

let sum = 0;

for(let i = 0 ;i<len ; i ++){
   sum += myArr[i];
}
console.log(sum);

console.log(sum / len);
