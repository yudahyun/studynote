//1.괄호에 알맞은 문제를 구하시오.

const fruits = '🍎, 🥝, 🍌, 🍒';
console.log(fruits.split(","));
//너무쉽당 ㅋㅋ 

//2. 다음은 한글입력을 확인하는 코드이다 빈칸에 알맞은 것을 구하시오.

const patten1 = [빈칸ㅋㅋ];
if(!patten1.test(username)){
    console.log("이름은 한글만 입력 가능합니다");
}
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
2. true  && falce || true   // true
3. falce || falce && ture   // true
4. falce && falce || falce  // falce
5. falce || falce && ture   // falce => ture   

*/

/*
4. 값이 다른 것을 구하시오
 int a= 1,b=1,c=1,d=1,e=2

++a;
b++;
c= c+1;
d+= -1;
e*= 1;
*/
let a= 1,b=1,c=1,d=1,e=2;

++a;
b++;
c= c+1;
d+= -1;
e*= 1;

console.log(a,b,c,d,e);


