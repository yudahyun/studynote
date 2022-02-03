
//문제 1
 var check_list = [true,false,false,true,false];
 

//  for(let i = 0; i < check_list.length;i ++){
//      if( check_list.length[i] == true){
//          check_list[i] = false;
//          console.log("한번도");
         
//      }else {
//          console.log("아예 ?");
//          check_list[i] = true;
//      }
//  }
// 연산자 ! 를 사용하여 boolen 값을 반전 시킨다.
  for(let i = 0; i < check_list.length;i ++){
    check_list[i] = !check_list[i];
}
console.log("before -- > "+ check_list);

 console.log("after -- > "+ check_list);
 

//문제 2

var grade = [75,82,91];
var sum = 0 ,  avg = 0;

//총점 구하기 
// for(let i = 0; i<grade.length;i++){
//     sum += grade[i];
// }
//총점 구하는 다르 방법 
for (const p of grade ){
    sum += p;
}

console.log(sum);

//평균 구하기
avg = sum / grade.length;
//arr의 값을 소수점 둘쨰 자리까지로 제한한다.
avg = avg.toFixed(2);
console.log("총점: " + sum +"점 , 평균 점수 : "+ avg + "점");

//문제3 

var time = [7,5,5,5,5,10,7];
var money = 0;

for (let i = 0; i < time.length ; i++){
    
   // 풀이 방법 1
    // if(i < 4){
    //    money += time[i] * 4500; 
    // }else {
    //     money += time[i] * 5200;
    // }

    // let x  = 0 ;
    // if(i < 4){
    
    //     x = 4500
    // }else {
    //     x = 5200;
    // }
    // money += time[i] * x;

    //let x = 
    money += time[i] *  (i < 4) ? 4500 : 5200;;

    //money += time[i] * (i < 4 ) ? 4500 : 5200;
}
console.log("1주일간의 전체 급여 : " + money);

//문제 4 두 배열이 똑같아야 함 

var price = [38000,20000,17900,17900];
var qty = [6,4,3,5];
var money1 = 0;

for(let i = 0; i < price.length ; i++){
 
    money1 += price[i] * qty [ i];

    
}

console.log("전체 금액 : " +money1 +"원");
//문제 5 
var money2= 0;
for(let i = 1; i < price.length ; i++){

//     if(price[i] * qty[j]){
//         money2 =  
//     }
 }
 //최대값 구하는 거 응용하기 !!

 //개별 배송, 무료배송 이다 ㅇ
 console.log("가장 높은 상품 금액 : " + money2);
let money3 = 0;
//문제6 못풀겠삼 
//문제 7
var price1 = [20900,10900,119000,109000,94000];
console.log("상품가격 -->)" + price1) ;
for(var i = 0;i< price1.length-1;i++){
    for(var j = i+1;j<price1.length; j++){
        if(price1[i]>price1[j]){
            var tmp = price1[i];
            price1[i] = price1[j];
            price1[j] = tmp;
        }
    }
}
console.log("낮은 가격순 --> "+price1);

//문제8 
var arr = [5,3,2,8,9];
console.log("brfore --> "+ arr);


for(var i =0 ; i <parseInt(arr.length/2);i++){
    var tmp = arr[i];
    arr[i] = arr[arr.length - i-1];
    arr[arr.length - i-1] = tmp;
}
console.log("after --> " + arr);


//문제 9
/*학생 이름 배열 */

//문제 10 


//문제 12
var ssn = [0,1,1,2,1,3,1,0,0,0,1,2,3];
var jum = [2,3,4,5,6,7,8,9,2,3,4,5];
var sum = 0;

for(let i = 0 ; i < ssn.length -1; i++){
    sum += ssn[i] * jum[i];
   
}
//console.log(sum);
sum %=  11;
sum -= 11;
sum %= 10;
console.log(sum);
