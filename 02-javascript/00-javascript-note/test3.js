
function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
  }
  var number = random(100, 200);
  //console.log(number);
  
  let randomSum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 3 == 0) {
      randomSum += i;
    }
  }
  console.log(number);
  console.log("랜덤 수의 합은 %d 입니다.",randomSum);