const myArr =[10, 8 , 6 , 4];
let A = parseInt(myArr.length/2);

for(let i = 0 ; i <A;i++){
    const 다시 =myArr.length - i - 1;
    const tmp =myArr[i];
    myArr[i] =myArr[다시];
   myArr[다시]= tmp;
}
console.log(myArr);