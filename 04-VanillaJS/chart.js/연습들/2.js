const  student = [
    {
        "id": 10101,
        "name": "전인하",
        "grade": 4,
        "birthdate": "2000-07-01",
        "height": 176,
        "weight": 72,
        "deptno": "컴퓨터과"
    },
    {
        "id": 10102,
        "name": "전인",
        "grade": 4,
        "birthdate": "2003-07-01",
        "height": 160,
        "weight": 40,
        "deptno": "데이터과"
    }
]

let ageInfo ={};
const nowYear = new Date().getFullYear();
student.forEach((v,i)=>{
  const key = v.grade + "학년";
  const birthYear = v.birthdate.substring(0.4);

  const age =

});

console.log(ageInfo);