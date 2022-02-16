const m3 = {
    userName: "철민",
    email:"메일주소"
};

const m4 = m3;

console.log(m3);
console.log(m4);


m3.userName= "민수";
m3.email ="민철주소";

console.log(m3);
console.log(m4);