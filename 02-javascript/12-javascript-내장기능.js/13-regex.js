const username = "자바스크립트";
const age ="20";
const userid = "js123";

//한글이름 검사
const patten1 = /^[ㄱ-ㅎ가-힣]*$/;
if(!patten1.test(username)){
    console.log("이름은 한글만");
}

//숫자 입력 검사

const patten2 = /^[0-9]*$/;
if(!patten2.test(age)){
    console.log("나이는 숫자만");
}

//영문+숫자
const patten3 = /^[a-zA-Z0-9]*$/;
if(!patten3.test(age)){
    console.log("영문숫자만");
}

if(userid.length<20){
    console.log("아이디는 최대 20자");
}