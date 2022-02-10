class MemberClass {

    constructor(){
        this.userName = null;
        this.email = null;
    }
}

const m1 = new MemberClass();
console.log(m1);
console.log(m1.userName);
console.log(m1.email);

const m2 = new MemberClass();
console.log(m2);
console.log(m2.userName);
console.log(m2.email);

m1.userName = "민혁";
m1.email = "메일줏";

console.log(m1);

