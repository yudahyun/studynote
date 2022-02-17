// String
const str = "Life is short , you need Javascript";

//life 만 출력
//위치확인
let l = str.indexOf("L");
let e = str.indexOf("e");

console.log(str.substring(l,e+1));

// , 을 기준으로 배열 만들기
console.log(str.split(","));
console.clear();

//, 를 & 로 바꾸기 
console.log(str.replace(",","&"));

// 문자열의 앞 뒤 공백 지우기
console.log(str.trim());

