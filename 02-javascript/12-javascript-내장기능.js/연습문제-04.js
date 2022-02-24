function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

const lotto =[];
for(let i = 0 ; i < 6;i++){
    //무한 방법
    while(true){
        const rnd = random(1,6);
        //rnd 값이 lotto 배열 안에 원소와 중복되지 않는 다면
        if(!lotto.includes(rnd)){
            lotto.push(rnd);
            break;
        }

    }
    
}
//console.log(lotto);

//문제5
let balls = [];
for(let i =0; i <= 45; i++){
    balls.push(i);
}
console.log(balls);

const lotto2 = new Array(6);
for(let j = 0; j <lotto.length; j++){
   const rnd2 = random(0,balls.length-1);
   console.log(rnd2);
   lotto[j]=(balls[rnd2]);
   balls.splice(rnd2,1);
}

 console.log(lotto);