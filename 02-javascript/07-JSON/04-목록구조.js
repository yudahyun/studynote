const student1 = {
  studno: 10101,
  grade: 1,
  name: "학생1",
};

const student2 = {
    studno: 20202,
  grade: 2,
  name: "학생2",
}

const classroom ={
    student : [student1,student2]
}
console.log(classroom);

for(let i = 0 ; i < classroom.student.length;i++){
    console.log(classroom.student[i].studno);
}

let i = 0;
for(const s of classroom.student){
    console.log(s.studno);
    i++//증감식
}