let x = 1; //초기식

while (x <= 10){
    const k = "x=" + x;
    console.log(k);

    x++;
}

console.log("최종값은" + x);


let y =1;

while (y < 13){
    const z = y * 13;
    console.log("13 x %d =  %d" , y ,z);
    y++
}


let y = 1;

while(y < 13){
    const z = y * 13;
    console.log ("13 x %d = %d",y,z);
    y++
    
}

let x = 1;

while(x <= 13){
    const z = x * 13;
    console.log ("13 x %d = %d",x,z);
    x++;
    
}


//5단 구구단 쓰기 
let i = 1;

while (i <= 9){
    result = i * 5;
    console.log("5x"+i+"="+result);
    i ++;
}