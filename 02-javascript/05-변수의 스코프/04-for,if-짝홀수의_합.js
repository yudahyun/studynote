let evenNum = 0; // 짝수의 합
let oddNum = 0; //홀수의 합

//1~ 10 까지의 짝수와 홀수의 각각 값을 구하시오 .

for(let i = 1; i < 11 ; i++){
    if(i % 2 == 0){
    
        console.log(" %d는 짝수",i);
        evenNum+= i;
    }else{
        console.log(" %d는 홀수",i);
        oddNum+= i;
    }
}

console.log("1~10까지의 홀수들의 합 : ",oddNum);

console.log("1~10까지의 짝수들의 합 : ",evenNum);





let 짝합 = 0;
let 홀합 = 0;

for(let 숫자 = 1; 숫자 < 10 ; 숫자 ++ ){

    if (숫자 % 2 == 0){
        console.log(" %d는 짝수이다.",숫자);
        짝합 += 숫자;
    }else{
        console.log("%d는 홀수이다.",숫자);
        홀합 +=숫자;
    }
}

console.log("짝수의 합",짝합);
console.log("홀수의 합",홀합);