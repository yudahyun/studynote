function foo(){
    for(let i = 0; i <10; i ++){
        console.log( " 2 x "+ i + "= "+ (i * 2) );
    }
}
setTimeout(foo,3000);
console.log("구구단을 외자 !");

setTimeout(() => {
    console.log("zz");
},1500);