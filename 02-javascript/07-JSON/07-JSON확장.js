const yu = {
    name : "냥냥",
    age : 20
}

const nextAge = yu.age + 1;
console.log(nextAge);

const jin = {};
console.log(jin);
for(let i = 0; i <10;i++){
    const key ="value" + i;
    jin[key] = i * 100;
}
console.log(jin);
