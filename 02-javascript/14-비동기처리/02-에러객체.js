let  err = new Error("에러났어용");
console.log("에러이름"+ err.name);
console.log("에러내용"+ err.massage);

throw err;
console.log("프로그램 종료");