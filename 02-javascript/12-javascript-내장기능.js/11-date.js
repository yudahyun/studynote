const date = new Date();
const ts1 = date.getTime();
console.log(ts1);

//며칠이 지났는지
const prevDay = new Date(date.getFullYear(),0,1);
const ts2 = prevDay.getTime();
const tmp1 = ts1 - ts2;
const day1 = Math.floor(tmp1 / (24 * 60 * 60*1000));
console.log('올해는'+day1+"일 지났습니다.");

//며칠 남앗는지
const nextDay = new Date(date.getFullYear(),11,31);
const ts3= nextDay.getTime();
const tmp2 = ts3 -ts1;

const day2 = Math.ceil(tmp2 /(24 *60*60*1000));
console.log("올해는"+day2+"일 남았습니다.");

const a = date.getDate()+30;
date.setDate(a);
console.log(date.toLocaleString('ko-KR'));

const b = date.getDate() - 100;
date.setDate(b);
console.log(date.toLocaleString('ko-KR'));

//오늘 날짜 객체
const today =new Date();
//이번달 1일로 이동
today.setDate(1);
const startDay =today.getDay();
console.log(startDay);

//이번달의 마지막 날은 몇일인지 > 다음달의0번째 날짜 구함
const m = today.getMonth();
today.setMonth(m+1);
today.getDate(0);
const lastDate = today.getDate();
console.log(lastDate);

//6행 7열의 빈 배열 만들기
var data = new Array(6);
for (let i = 0; i <data.length; i++){
    data[i] = new Array(7);
} 

//1씩 증가 할 값
let counter = 1;
for(let i = 0 ; i < data.length;i++){
    for(let j = 0 ; j < data[i].length;j++){
        if(i == 0 && j < startDay ||counter > lastDate){
            data[i][j] = 0;
        }else{
            data[i][j] = counter ++;
        }
    }
}

for(let i = 0 ; i < data.length; i++){
    let str = '';
    for(let j = 0 ; j <data[i].length;j++){
        str += data[i][j] == 0 ? "\t" :(data[i][j] + "\t")
    }
    console.log(str);
}