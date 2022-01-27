// let x = 1;
// let i = 1;

// while (i <= 10) {
//   x *= 2;
//   console.log("이진수 %d개는 %d개의 정보를 표시가능", i, x);
//   i++;
// }

// let x = 1;
// let i = 1;

// for (let i = 1; i <= 10; i++) {
//   x *= 2;
//   console.log("이진수 %d개는 %d개의 정보를 표시가능", i, x);
// }

let bit = 1;
for(let i =1;i < 11; i++){
  bit = bit * 2;
  console.log("%d개의 이진수는 %d개를 표현",i,bit);
}