//##1.문제
var ssn = "9203211";
let date = new Date();
let now_year = date.getFullYear();

var yy = parseInt(ssn.substring(0, 2));
let gen = parseInt(ssn.substring(6, 7));
var yy = gen > 2 ? yy + 2000 : yy + 1900;
let age = now_year - yy + 1;
let sex = gen % 2 ? "남자" : "여자";

console.log("당신은 %d세 %s입니다.",age,sex);

//

function random(n1, n2) {
  return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}
var rnd = random(100, 200);
//console.log(rnd);

let randomSum = 0;
for (let i = 0; i <= rnd; i++) {
  if (i % 3 == 0) {
    randomSum += i;
  }
}
//console.log(rnd);
console.log("랜덤 수의 합은 %d 입니다.",randomSum);

//3번


function hashadNum(x) {
  x += "";
  var beforeNum = x.substring(0, 1);
  var afterNum = x.substring(1);
  //console.log(beforeNum);
  //console.log(afterNum);

  var testSum = parseInt(beforeNum) + parseInt(afterNum);
  //console.log(testSum);

  if (x % testSum == 0) {
   return true;
  } else {
    return false;
  }
}

console.log(hashadNum(10));
console.log(hashadNum(12));
console.log(hashadNum(11));
console.log(hashadNum(13));
