class Rectangle{
    constructor(width,height){
        this._width = width;
        this._height = height;
    }
    get width (){
        return this._width ;
    }
    set width(param){
        this._width = param;
    }
    get height(){
        return this._height;
    }
    set height(param){
        this._height =param;
    }
    getAround(){
        return this.width * 2 + this.height *2;
    }
    getArea(){
        return this.width * this.height
    }

}

const 네모 = new Rectangle();
네모.width = 5;
네모.height = 5;

console.log("네모의 넓이는 %d , 둘레는 %d입니다.",네모.getArea(),네모.getAround());