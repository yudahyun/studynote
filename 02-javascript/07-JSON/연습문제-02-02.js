const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}
let j = [];
let arr = [];

for(const i in exam){
    let sum = 0;
    for(const p of exam[i]){
        sum += p;
        
    }
    let avg = sum / exam[i].length;
    arr.push([i,sum,avg]);
    
}

//console.log(arr);

