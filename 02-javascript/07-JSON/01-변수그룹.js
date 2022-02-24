const student = {
    studno : 10101,
    grade : 1,
    name : "학생",
    phoneno : "010-1234-1234"
};

console.log("학번 : " + student.studno);
console.log("번호 :" + student['phoneno']);
const keyname = 'phoneno';
console.log(student[keyname]);

const keys = Object.getOwnPropertyNames(JSON);
//const keys = Object.getOwnPropertyDescriptors(JSON);
//const keys = Object.getOwnPropertySymbols(JSON);
//const keys = Object.getPrototypeOf(JSON);

console.log(keys);

for ( const k of keys){
    console.log(student[k]);
}