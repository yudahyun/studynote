const str1 = "hellow world";
console.log(str1);

const str2 = new String("hello world");
console.log(str2);

const msg = "hey";
console.log("문자열 :" + msg);

const len = msg.length;
console.log("문자열의 길이 : "+len);

const sre2nd = msg.charAt(2);
console.log("두번째 글자 : " + msg[2]);

const p2 = msg.indexOf("e");
const p3 = msg.indexOf("e", p2+1);
console.log(p2);
console.log(p3);

const p4 =msg.lastIndexOf("y");
console.log("y의 마지막 위치",p4);

if(msg.indexOf("hey")>-1){
    console.log("hey 포함");
}else{
    console.log("hey 안됨");
}

const substring1 = msg.substring(0,2);
console.log("앞 문자열 자르기"+substring1);

const up = msg.toUpperCase();
console.log(up);


const low = msg.toLowerCase();
console.log(low);

const src1 = "      hello  ";
const src2 = src1.trim();
console.log(src1);
console.log(src2);

const txt = "Html,css,javascipt";
const arr = txt.split(",");
console.log(arr);

const txt2 = txt.replace(",","$");
console.log(txt2);

const text = "hello javascript , world javascript";
console.log(text.replaceAll("javascript","자바스크립트"));