var max = Math.max(100,200,300,400);
console.log(max);

var min = Math.min(100,123);
console.log(min);

var num1 = 3.2125;
console.log(Math.round(num1));//반올림
console.log(Math.ceil(num1));//소수점 올림
console.log(Math.floor(num1));//소수점 내림

var num2 = -123;
console.log(Math.abs(num2));//절대값

console.log(Math.random());//0-1 사이 난수 

function random(n1,n2){
    return parseInt(Math.random()*(n2 - n1 + 1))+n1;
}
var rnd = random(0,9);
console.log(rnd);
//0~9사이에 난수

//5자리 인증번호 생성
var auth = "";
for(var i = 0; i <5; i++){
    auth +=random(0,9);
}
console.log( auth);
