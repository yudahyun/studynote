// 문제 1 - 다음을 만족하는 Student 클래스를 작성하시오.

// 1) String형의 학과와 정수형의 학번을 프로퍼티로로 선언후 생성자를 통해 주입
// 2) getter, setter를 정의
// 3) sayHello() 메서드를 통해 "나는 OOOO학과 OO학번 입니다." 를 출력하는 기능을 구현

class Student {
    constructor(ban, num){
        this._ban = ban;
        this._num = num;

    }

    get ban(){
        return this._ban;
    }
    set ban(param){
        this._ban = this.ban;
    }
    get num(){
        return this._num;
    }
    set num(param){
        this._num = this.num;
    }
    
    sayHello(){
       
        console.log("저는 %s학과 %d 학번입니다.",this.ban,this.num);
    }
};
const s1 = new Student("풀스택",141414);
const s2 = new Student("풀스택2",14143);
s1.sayHello();
s2.sayHello();