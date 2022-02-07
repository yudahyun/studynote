let a = 100;
let b = a;
console.log(a,b);

a++;
console.log(a,b);

const user ={
    name : "Lee"
};

const member = user;

console.log(user);
console.log(member);

member.name= "KIM";
console.log(user);
console.log(member);

const d1 = [1,2,3];
const d2 = d1;

console.log(d1);
console.log(d2);

d1[0] += 10;
d1[1] += 10;
d1[2] += 10;
console.log(d1);
console.log(d2);


const a1 = [1,2,3];

const a2 = new Array (a1.length);

for(let i = 0; i < a1.length; i++){
    a2[i] = a1[i];
}


const a3 = a1.slice();

console.log(a1);
console.log(a2);
console.log(a3);

a1[0] += 100;
console.log(a1);
console.log(a2);
console.log(a3);


// 제이슨의 깊은 복사 

const addr ={
    city : "서울",
    gu : '서초'
}


const copy = {};

for(let key in addr){
    copy[key] = add[key];
}

console.log(addr);
console.log(copy);

addr.gu = "강남";
console.log(addr);
console.log(copy);

const copy2 = {};
Object.assign(copy1,addr);
// 비어있는 json 이면 복사 


