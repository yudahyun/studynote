//100까지 3과 5의 공배수를 출력하고 모두 더하시오 ~! 

let 삼 = 3;
let 오 = 5;

let 모두 = 0;


for(let 숫자 = 0;숫자< 50;숫자 ++){
    if( 숫자 % 삼 == 0 && 숫자 % 오 ==0  ){
        console.log("50중에 %d는 공배수이다.",숫자);
        모두 += 숫자;
    }
}

console.log("모두 더한 값은, %d이다.",모두);



//30까지의 4와 2의 공배수를 출력하고 모두 더하시오.

let 사 = 4;
let 이 = 2;

let 사이합 = 0;

for (let 숫자 = 1 ; 숫자 < 30 ; 숫자 ++){

    if( 숫자 % 사 == 0 && 숫자 % 이 == 0){
        console.log("%d 는 4와 2의 공배수이다.",숫자);
        사이합 += 숫자;
    }
}

console.log("모두의 합은 %d",사이합);
















