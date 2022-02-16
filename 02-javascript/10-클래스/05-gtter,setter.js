class UserClass{
    constructor(){
        this._userName = null;
        this._email = null;

    }
    set userName(value){
        if(!value){
            console.log("userName을 입력하세요");
            return;
        }
        this._userName = value;
    }
    get userName(){
        return this._userName;
    }
    set email(value){
        if(!value){
            console.log("이메일을 입력하세요.");
        }
        this._email = value;
    }
    get email(){
        return this._email;
    }
    login(){
        if(!this.userName || !this.email){
            console.log("userName이나 email을 입력하세요");
            return;
        }
        console.log("로그인되었습니다.");
    }
};


const user = new UserClass();
user.login();

user.userName = "네임";
user.email = "이메일";
