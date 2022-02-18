// max는 출력해야 할 최대 라인 수
function printStar(max) {
  //... 구현하세요 ...
  for (let i = 0; i < max; i++) {
    let star = "";
    for (let j = 0; j < i+1; j++) {
      star += "*";
    }
    console.log(star);
  }
}

//printStar(5);

//재귀함수로
function printStar2(max,crrent=1){
  if(max < crrent){
    return;
  }else{
    let star = "";
    for(let j = 0 ; j < crrent ;j++){
      star += "*";
    }
    console.log(star);
    printStar2(max,crrent+1);
    
  }
}
printStar2(5);

//