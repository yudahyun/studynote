// const foo = function(x){

const foo = (x) => {
    for (let i = 0 ; i < x; i++){
        console.log("hello world");
    }
};

foo(7);

const bar = x =>{
    for(let i = 0; i < x; i ++){
        console.log("hello world");
    }
}
bar(2);


const hellow = (x,y) => x+y ; 
console.log(hellow(1,2));