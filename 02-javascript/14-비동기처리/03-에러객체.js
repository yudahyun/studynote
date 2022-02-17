let err = new Error("에러입니다");

try{
    throw err;
}catch(err){
    console.log("에러이름"+err.name);
    console.log("에러내용"+err.massage);
}
console.log("프로그램 종료");