function User(){
    this._id = null;
    this._email = null;
}

const foo = new User();
foo._id = "푸";
foo._email = " 메일주소";

console.log(foo);