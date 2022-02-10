const User = function(id, email){
    this._id = id;
    this._email = email;
};


User.prototype.login = function(){
    console.log("로그인 되었습니다");
}

const student = new User('푸',"메일주소");
student.login();