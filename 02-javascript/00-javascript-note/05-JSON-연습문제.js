//1.문제
const BloodType =['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];
const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};
//of 는 key 전용
for(const b of BloodType){
    result[b]++;
}
//console.log(result);

//2.

const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}
let sum = 0;
let avg = 0;

let allMath = 0;
let studentCount = 0;
let allMathAvg = 0;
//of 는 key 전용
//in 은 배열 전용
for(const key in exam){
    //console.log(key);
    //sum = 0;
    for(const s of exam[key]){
        sum += s;
        avg = sum / exam[key].length;
       
    }
    allMath +=  exam[key][2];
    studentCount++;
    allMathAvg = allMath /studentCount ;
   // console.log(key , sum ,avg);
    
}
//console.log(allMath,allMathAvg);

//3

covid19 = [
    {date: '0125', active: 426}, 
    {date: '0126', active: 343}, 
    {date: '0127', active: 547}, 
    {date: '0128', active: 490}, 
    {date: '0129', active: 460}, 
    {date: '0130', active: 443}, 
    {date: '0131', active: 338}, 
    {date: '0201', active: 299}
]
var 합  = 0;
var 평균 = 0;


for(const p of covid19){
   합 += p['active'];
  // console.log(p['active']);
}
//console.log(covid19[0]);
//console.log(합,합/covid19.length);  

//가장 많이 나타난 날짜

let max_active = covid19[0].active; ;//426
let max_date = covid19[0].date;      //0125
    
for(const j of covid19){
    //console.log(p.active); //active list
    if(max_active <j.active){
        max_active = j.active;
        max_date = j.date;
        //console.log(max_active);       
    }
}
const addr ={
    maxday : max_date,
    maxactive : max_active
}
console.log(addr);

