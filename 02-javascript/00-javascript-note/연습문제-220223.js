//1 문제1

let myMail = "ekgus1129@gmail.com";

//앞
//console.log(myMail.substring(0,myMail.indexOf("@")));
//console.log(myMail.substring(myMail.indexOf("@")+1));

//2 문제2 

let ssn = '020517-3******';
let date = new Date();
let nowYear = date.getFullYear();
let yy = parseInt( ssn.substring(0,2));
let mm = parseInt( ssn.substring(3,4));
let dd = parseInt( ssn.substring(5,6));
let gen = parseInt( ssn.substring(7));

//console.log(gen);
let year = (yy < 2) ?yy+ 1900 : yy+2000;
let sex = gen % 2 == 0 ? "여자" : "남자";
//console.log(year+"년 "+mm+"월 "+dd+"일 "+"에 태어난 "+sex + "입니다.");

 // 문제3

 let str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다.";
 let count = 0;
 let word = "수업시간";
 let find = true;
 let flen = word.length;


// console.log(str.length);
while(find){
    find = str.indexOf(word) > -1;
   // console.log(find);
    if(find){
        count++;
        str = str.substring(str.indexOf(word)+word.length);
    }
    
}
 //console.log(count);


//문제 4
 function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}
let lotto = [];
for(let i = 0 ; i<6 ; i++){
    const random1 = random(1,45);
    while(true){
        if(!lotto.includes(random1)){
            
            //lotto.push(random1);
            break;
        }
    }
}
//console.log(lotto);
 
//문제 5
