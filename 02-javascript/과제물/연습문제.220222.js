// const exam = {
//     "철수": [89, 82, 79, 91],
//     "민영": [91, 95, 94, 89],
//     "남철": [65, 57, 71, 64],
//     "혜진": [82, 76, 81, 83]
// }
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

let max_active = covid19[0].active;
let max_date = covid19[0].date;

for ( const j of covid19){
    if(max_active < j.active){
        max_active = j.active;
        max_date = j.date;
    }

}

console.log(max_date);