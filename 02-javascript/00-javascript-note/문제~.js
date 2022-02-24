//1.괄호에 알맞은 문제를 구하시오.

const fruits = '🍎, 🥝, 🍌, 🍒';
//console.log(fruits.split(","));
//너무쉽당 ㅋㅋ 

//2. 다음은 한글입력을 확인하는 코드이다 빈칸에 알맞은 것을 구하시오.


// const username = "자바스크립트"
// const patten1 = /^[ㄱ-ㅎ가-힣]*$/;
// if(!patten1.test(username)){
//     console.log("이름은 한글만 입력 가능합니다");
// }



/*
1./^[ㄱ-ㅎ가-힣]*$/
2./^[ㄱ-가-힣]*$/
3./^[ㄱ-가ㅎ-힣]*$/
4./^[ㄱ가-ㅎ힣]*$/
5./^[ㄱ-가-ㅎ-힣]*$/
*/

//3.다음중 알맞지 않은 것을 고르시오.
/*
1. true  && true  || true   // true
2. true  && false || true   // true
3. false || false && ture   // true
5. false || false && ture   // false => ture   

*/


//4. 값이 다른 것을 구하시오

// let a= 1,b=1,c=1,d=1;

// ++a;
// b++;
// c= c+1;
// d+= -1;


// console.log(a,b,c,d);



// ++a;
// b++;
// c= c+1;
// d+= -1;
// e*= 1;

// console.log(a,b,c,d,e);


let list =[4,5,6]

// for(let i in list){
//     console.log(i) // 결과 : 
// }

// for(let i of list){
//     console.log(i) // 결과 :
// }


//  123 456
//  012 456 // 정답
//  456 123
//  456 012


console.log(false || false && true); //false
console.log(true && false || true); //true
console.log(true && true || true) //ture
console.log(false || false && true); //false
