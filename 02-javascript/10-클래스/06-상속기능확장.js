class SayHello {
    eng (){
        console.log("hi");
    }

}

class korean extends SayHello {
    kor(){
        console.log("하이");
    }
}
const 인사 = new korean();
인사.kor();
인사.eng();