const set11 = ";./?:@&=+$#"; //예약문자
const set2 = "-_.!~*'()"; // 비예약문자
const set3 = "ABC abc 123";
const set44 = "자바스크립트";

const enc1 = encodeURIComponent(set11);
const enc2 = encodeURIComponent(set2);
const enc4 = encodeURIComponent(set44)

console.log(enc4);

console.log(decodeURIComponent(enc4));
