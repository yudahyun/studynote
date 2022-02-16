const days = ["일","월","화","수","목","금","토"];

const date1 = new Date();

const yy = date1.getFullYear();
const mm = date1.getMonth()+1;
const dd = date1.getDate();

const i = date1.getDay();
const day = days[i];

const hh  =date1.getHours();
const mi = date1.getMinutes();
const ss = date1.getSeconds();

var result = yy+"-"+ mm +"-"+ dd +"-"+day + hh + mi + ss;
console.log(result);

console.log(date1.toDateString());
console.log(date1.toISOString());

//날짜
console.log(date1.toLocaleString());
console.log(date1.toLocaleString("de-DE"));
console.log(date1.toLocaleString("ko-KR"));
//시간
console.log(date1.toLocaleDateString());
console.log(date1.toLocaleDateString("de-DE"));
console.log(date1.toLocaleDateString("ko-KR"));

var date2 = new Date(2021,9,5);
console.log(date2.toLocaleString('ko-KR'));

date2.setYear(2010);
