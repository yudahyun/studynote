
let bloodType =['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];
const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};

for(const i of bloodType){
    result[i]++;
   }
//console.log(result);

const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}
let sum = 0, avg = 0 ,count = 0;
for(let i in exam){
    
    sum = 0;
    for(let j in exam[i]){
        sum += exam[i][j];
        //count = exam[i][j].length;
       // console.log(count);
       // console.log(exam[i][j]);
        
    }
    avg = sum / exam[i].length;
    console.log(i,sum,avg);
    
}