function returnBreack(x,y){
    if(x < 10){
        return -1;
    }
    if(y < 100){
        return -2;
    }

    return x + y ;
}

console.log(returnBreack(1,2));
console.log(returnBreack(100,200));

console.log(returnBreack(100,2));
