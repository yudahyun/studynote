function User(id,email){
    this._id = id;
    this._email = email;
}

const foo = new User("푸","메일주소");
console.log(foo);