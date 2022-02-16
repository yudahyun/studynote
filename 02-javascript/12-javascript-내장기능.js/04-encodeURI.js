const set11 = ";./?:@&=+$#"; //예약문자
const set2 = "-_.!~*'()"; // 비예약문자
const set3 = "ABC abc 123";
const set44 = "자바스크립트";

const enc1 = encodeURI(set11);
const enc2 = encodeURI(set2);
const enc4 = encodeURI(set44)
console.log(enc4);