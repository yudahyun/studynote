 email = 'leekh4232@gmail.com';

 email1 = email.indexOf("@"); 
 id = email.substring(0,email1);
 com = email.substring(email1+1); 

console.log(id);
console.log(com);

//----------------------------------------

var ssn = "020517-3******";
const date1 = new Date();
const now_year = date1.getFullYear();

let yy = parseInt(ssn.substring(0,2));
let mm = parseInt(ssn.substring(2,4));
let dd = parseInt(ssn.substring(4,6));
let gen = parseInt(ssn.substring(7,8));
//2000년도 이후 출생자의 주민번호는 3,4
let yy = (gen > 2) ? yy +2000: yy+1900;
let age = now_year - yy + 1;
let sex = (gen % 2) ? "남자" : "여자";


console.log("%d년 %d월 %d일에 태어난 %d세 %s입니다.",yy,mm,dd,age,sex);
//생년 월일, 나이 ,성별;

var str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다.";
var word = "수업시간";
var flen = word.length;
var find = true;
var count = 0;

for(let i = 0 ; i < str.length ; i++){
    if(str .indexOf("수업")> -1){
        console.log("있다");
    }
    
}
console.log(count);