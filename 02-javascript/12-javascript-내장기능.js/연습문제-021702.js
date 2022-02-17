//MAth 
const number = new Array(5);

//5로 채우기
for(let i = 0 ; i <number.length; i ++){
    number[i] = i+1;
}
//console.log(number);

//가장 큰 숫자
console.log(Math.max(...number));
console.clear();
//소수점 반올림
const 내키 = 172.912;
console.log(Math.round(내키));
console.log(Math.ceil(내키)); // 반올림
console.log(Math.floor(내키));