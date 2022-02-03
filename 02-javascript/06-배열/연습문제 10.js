var student = ['둘리','도우너','또치','희동'];

// 성적표 배열
var grade2  = [
    [78,89,96],
    [62,77,67],
    [54,90,80],
    [100,99,98]

];
var sum = 0 , avg = 0;
//var arr2= [student , grade2];



// 총점과 평균 구하기
for(let i = 0 ; i < grade2.length ; i++){
    //0으로 리셋하고 들어감
    //합계를 위한 변수가 선언 되있기 떄문에 
    //중복선언을 피하기 위해서 기존의 변수를 0으로 리셋
    sum = 0;
    for(let j = 1 ; j < grade2[i].length;j++){
        sum += grade2[i][j];
          
    }
    avg =sum/student.length;
    avg = avg.toFixed(2);
    console.log(student[i]+" 총점 :"+sum+"평균 : %d",avg);
   
}
 
