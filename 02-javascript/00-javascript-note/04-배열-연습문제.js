// 1. 연습문제
var check_list = [true,false,false,true,false];
console.log("before : ",check_list);
for(let i = 0 ; i <check_list.length; i++){
    check_list[i] = !check_list[i]  ;
}
console.log("after : ",check_list);

// 2. 연습문제

var grade =[75,82,91];
var sum = 0, avg = 0;

//총점구하기 
for(let i = 0 ; i < grade.length; i++){
    sum += grade[i];
    avg = sum / grade.length;
    
}

avg = avg.toFixed(2)
console.log("총점은",sum);
console.log("평균은",avg);

//3. 연습문제

var time = [7,5,5,5,5,10,7];
var money = 0;

for(let i = 0 ; i <time.length ; i++){
     money +=   time[i] *((i<4)? 4500 : 5200) ;  
}
console.log(money);

//4. 연습문제
var price = [38000,20000,17900,17900];
var qty =[6,4,3,5];
var money1 = 0;

for(let i = 0 ; i < price.length; i++){
    money1 += price[i] * qty[i];
}
console.log(money1);

//5. 연습문제
var expensive = price[0]*qty[0];

for(let i = 0; i < price.length; i ++){
    if(expensive < price[i]*qty[i]){
        expensive = price[i]*qty[i];
    }
}
console.log(expensive);

//6. 연습문제
var count = 0;
for(let i = 0 ; i <price.length; i++){
    if(price[i]*qty[i] >= 80000){
        count++;
    }
}
console.log(count);

//7. 연습문제
var price = [209000,109000,119000,109000,948000];

for(let i = 0 ; i < price.length-1;i++){
    for(let j = i + 1;j<price.length;j++){
        if(price[i]>price[j]){
            var tmp = price[i];
            price[i] = price[j];
            price[j] = tmp;
        }
    }
}
console.log(price);

//8. 연습문제

var arr = [5,3,2,8,9];
for(let i = 0 ; i<arr.length/2;i++){
    var tmp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = tmp;
}
console.log(arr);

//9. 연습문제
var student =['둘리','도우너','또치','희동'];
var grade1 = [
    [78,89,96],
    [62,77,67],
    [54,90,80],
    [100,99,98]
];
var sum1 = 0, avg1 = 0 ,all=0;

//총점 ,평균 구하기
for(let i = 0; i< grade1.length;i++){
    sum1 = 0;
  for(let j = 0; j < grade1[i].length;j++){
      sum1 += grade1[i][j];
      avg1 = sum1 / grade1[i].length;
      //all += avg1;
      //all /=  student[i].length;
    }    
    console.log(student[i],sum1,avg1,all);
    
}
//10. 

const inven =[
    [291,500],[586,320],[460,100],[558,120],[18,92],[72,30]
];

let sum2 = 0;
for(let i = 0; i<inven.length;i++){
    let item_price = inven[i][0] * (inven[i][1]*0.9);
    sum2 += item_price;
    console.log(item_price)
}
console.log(sum2);
   