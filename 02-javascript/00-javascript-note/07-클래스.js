// 학과 ,학번 도출 문제
class Student{
  constructor(ban,num){
    this._ban = ban;
    this._num = num;
  }
  get ban(){
    return this._ban;
  }
  set ban(value){
    this._ban = ban;
  }
  get num(){
    return this._num;
  }
  set num(value){
    this._num =num;
  }
  hello(){
    return console.log("저는 %s학과, %d 번입니다.",this.ban,this.num);
  }
}

const 학생1 = new Student ("냐냐","12");
//학생1.hello();

//account 문제

class Account{
  constructor(owner,balance){
    this._owner = owner;
    this._balance = balance;
  }
  get owner(){
    return this._owner;
  }
  set owner(value){
    this._owner = value;
  }
  get balance(){
    return this._balance;
  }
  set balance(value){
    this._balance = value;
  }
  deposit(amount){ // 저축
    return this.balance += amount;
  }
}
const 손님 = new Account("하이",5000);
손님.deposit(6000);
//console.log(손님.owner,손님.balance);
