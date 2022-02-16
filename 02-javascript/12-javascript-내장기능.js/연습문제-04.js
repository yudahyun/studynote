function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

const lotto =[];
for(let i = 0 ; i < 6;i++){
    //무한 방법
    while(true){
        const rnd = random(1,45);
        //rnd 값이 lotto 배열 안에 원소와 중복되지 않는 다면
        if(!lotto.includes(rnd)){
            lotto.push(rnd);
            break;
        }

    }
    
}
console.log(lotto);