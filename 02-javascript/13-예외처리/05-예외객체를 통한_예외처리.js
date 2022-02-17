function foo(x,y){

    if(x<0 && y<0 ){
        throw new Error("x와 y가 0보다 작다");
    }
    return x + y;
}

const k = null;

try {
    k = foo(-1,-2);
}catch(err){
    console.log(err.name);
    console.log(err.message);
}

console.log(k);