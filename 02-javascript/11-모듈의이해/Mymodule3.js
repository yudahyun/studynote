class MyClass {
    constructor(){
        console.log("객체가 생성되었다");
        this.age = 20 ;
        this.name = "노드";
    }
    say(){
        console.log("이름"+ this.name);
        console.log("나이"+ this.age);
        
    }
}

module.exports = MyClass;