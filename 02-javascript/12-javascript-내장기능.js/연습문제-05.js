const balls = new Array(45);

for(let i = 0 ; i <balls.length;i++){
    balls[i] = i + 1;

}

console.log(balls);

const lotto = new Array(6);
for(let i = 0 ; i<lotto.length; i++){
    //balls의 index 범위 안에서 임의의 위치 선정
    const rnd = random(0,balls.length-1);
    lotto[i]=(balls[rnd]);
    balls.splice(rnd,1);
}

console.log(lotto);
