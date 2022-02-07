const classroom ={
   student:[ {
        studno: 10101,
        grade: 1,
        name: "학생1",
      },
      
      {
          studno: 20202,
        grade: 2,
        name: "학생2",
      }]
} 
  for(let i =0;i<classroom.student.length;i++){
      console.log(classroom.student[i].studno);
      
  }