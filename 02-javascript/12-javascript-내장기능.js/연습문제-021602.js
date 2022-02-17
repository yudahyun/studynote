let ssn = '020517-3******';
let yy =  parseInt(ssn.substring(0,2));
let mm =   parseInt(ssn.substring(2,4));
let dd =   parseInt(ssn.substring(4,6));
let gen =  parseInt(ssn.substring(7,8));
//console.log(gen);

const date = new Date();
const now_year = date.getFullYear();

//console.log(now_year);

var age = (gen < 2) +yy ? (yy+2000) : (yy+1900);
age = now_year - age +1;
console.log(age);


var sex = (gen%2) ? "남자" :"여자";
console.log(now_year+"년도엔 " + age + "살 " +mm+"월 "+dd+"일생 "+sex);