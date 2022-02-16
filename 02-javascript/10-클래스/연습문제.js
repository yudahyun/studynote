// 문제 1 - 다음을 만족하는 Student 클래스를 작성하시오.

// 1) String형의 학과와 정수형의 학번을 프로퍼티로로 선언후 생성자를 통해 주입
// 2) getter, setter를 정의
// 3) sayHello() 메서드를 통해 "나는 OOOO학과 OO학번 입니다." 를 출력하는 기능을 구현

class Student {
    constructor(ban, num){
        this._ban = null;
        this._num = null;

    }

    get ban(){
        return this._ban;
    }
    set ban(param){
        this._ban = param;
    }
    get num(){
        return this._num;
    }
    set num(param){
        this._num = param;
    }
    
    sayHello(){
        var  string = "";
        return string = this.ban + "학과 " + this.num+ "학번";
    }
};
const s1 = new Student();
s1.ban = "풀스택";
s1.num = "14";
console.log("나는 " + s1.sayHello()+"입니다.");

// 문제 - 2. 다음을 만족하는 클래스 Account를 작성하시오.

// 1) 다음의 2 개의 필드를 선언
//     문자열 owner; (이름)
//     숫자형 balance; (금액)
// 2) 위 모든 필드에 대한 getter와 setter의 구현
// 3) 위 모든 필드를 사용하는 가능한 모든 생성자의 구현
// 3) 메소드 deposit()의 헤드는 다음과 같으며 인자인 금액을 저축하는 메소드
//     deposit(amount)
// 4) 메소드 withdraw()의 헤드는 다음과 같으며 인자인 금액을 인출(리턴)하는 메소드
//     withdraw(long amount)
//     인출 상한 금액은 잔액까지로 하며, 이 경우 이러한 상황을 출력

class Account {
    constructor (owner,balance ){
        this._owner = owner;
        this._balance = balance;
    }
    get owner(){
        return this._owner;

    }
    set owner(value){
        this._owner =value ;
    }
    get balance(){
        return this._balance ;
    }
    set balance(value){
        this._balance = value;
    }
    deposit(amount){
        this.balance += amount;
       
    }
    withdraw(amount){
        if(this.balance < amount){
            console.log("잔액이 부족합니다.");
            return 0;
        }
        this.balance -= amount;
        return amount ;    
    }

};

const acc = new Account("hello",15000);
console.log("%s의 잔액은 %d원",acc.owner,acc.balance);

//저축
acc.deposit(5000);
console.log("%s의 잔액은 %d원",acc.owner,acc.balance);

//인출
acc.withdraw(5000);
console.log("%s의 잔액은 %d원",acc.owner,acc.balance);
