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

let department = [];
let studentCount = [];

student.forEach((v,i)=>{
    d = v.deptno;
    p = department.indexOf(d);
    // console.log(p);
    if(p == -1){
        department.push(d);
        studentCount.push(1);

    }else{
        studentCount[p]++;
    }
});

console.log(department);
console.log(studentCount);
