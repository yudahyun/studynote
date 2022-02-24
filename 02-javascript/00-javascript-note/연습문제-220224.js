class Rec{
    constructor(width,height){
        this._width = width;
        this._height = height;
    }

    getAround(){
        return console.log( this._width *2 +this._height *2);
    }
    getArea(){
        return console.log(this._width  * this._height) ;
        
    }
}

const 네모 = new Rec(10,5);
네모.getAround();
네모.getArea();