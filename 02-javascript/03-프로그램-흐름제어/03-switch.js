const 국어 = "B";

switch (국어){
    case 'A':
        console.log("A학점 입니다.");
        //실행할 명령..
    break;
    case 'B':
        console.log("B학점 입니다.");
        //실행할 명령..
    break;
    default:
        console.log("c학점 미만입니다.");
        break;//이거 안쓰면 변수에 적합한 케이스가 없으면 break 보일떄까지 달림

    }

    // 스위치문 안씀다 

    //break 일부러 ㅋㅋ 

    const 국어 = "B";

switch (국어){
    case 'A':
        console.log("A학점 입니다.");
        //실행할 명령..
   
        console.log("B학점 입니다.");
        console.log("패스입니다");
        //실행할 명령..
    break;
    default:
        console.log("c학점 미만입니다.");
        break;//이거 안쓰면 변수에 적합한 케이스가 없으면 break 보일떄까지 달림

    }

    // 스위치문 안씀다 

    //break 일부러 ㅋㅋ 
    

    const A = true;
    const B = true;
    const C = true;
    const D = false;

    const myMath = D;
  
    if(myMath == true ){
        console.log("pass 입니다");
    }else if(myMath == false){
        console.log("pass 하지 못했습니다");
    }

    let math = "A"

    switch(math){

        case "A":
        case "B":
        case "C":
            console.log("이 과목을 pass 했습니다.");
            break;
        default :
            console.log("이 과목을 pass 하지 못했습니다..");
            break;

            
        
    }


    let 내점수 = "C";

    switch(내점수){

        case "A" :
            console.log("A점입니다.");
            break;
        case "B" :
            console.log("B점입니다.");
            break;
        case "C":
            console.log('C점입니다.');
            break;
        default :
            console.log("낙제입니다.");
    }