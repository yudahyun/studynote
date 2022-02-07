const object = {a:1,b:2};

const {a,b} = object;

console.log(a);
console.log(b);

const data  ={
    name : "hello",
    age : 20,
    height : 170,
    weight :50
}

const {name} = data ;

const member = {
    name : "캬캬",
    age : 20,
    gender : "m"
}

const membernew = {...member , email : "ekgus@mail.com", gender :"f"};
console.log(membernew);