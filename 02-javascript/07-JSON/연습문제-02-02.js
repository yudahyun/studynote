const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}
for(const key in exam){
    let sum = 0;
    for(const p of exam[key]){
        sum += p;
    }
    let avg = sum / exam[key].length;
    console.log(key,sum,avg);
}