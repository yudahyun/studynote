/*

let count = 0;
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    if (i + j == 6) {
      console.log(i, j);
      count++;
    }
  }
}

console.log("경우의 수는 %d입니다.", count);
*/
for (let i = 0; i < 4; i++) {
  let str = " ";
  for (let j = 0; j < 4; j++) {
    str += i + j;
//    console.log(str);
    // if (j + 1 < 4) {
    //   str += " ";
    // }
  }
  //console.log(str);
}

var number = 1;
var solution = 0;
solution =  number % 2 == 0 ? "짝":"홀";
//console.log(solution);
for(let i = 1 ; i < 5 ; i+2){
    console.log(i+number);
    
}

