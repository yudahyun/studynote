var bloodType = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];
var result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};

for(const b of bloodType){
    result[b]++;
}
console.log(result);

const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}
let sum = 0;
for(const key in exam){
   sum==exam[key][2];
   console.log(sum);
}


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


let max_date = covid19[0].date;
let max_active = covid19[0].active;

for(const j of covid19){
    if(max_active < j.active){
        max_active = j.active;
        max_date - j.date;

    }
   
}
console.log(max_date);
