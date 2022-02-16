class helloWorld{
    constructor (){
        this.message = null;
    }

    sayHello(){
       console.log(this.message);
    }
    setEng(){
        this.message = "hi";
    }
    setKor(){
        this.message = "안녕";
    }
};

const 인사 = new helloWorld();
인사.setEng();
인사.sayHello();

인사.setKor();
인사.sayHello();