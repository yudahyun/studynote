const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}

let sum = 0;
let student_count = 0;
for (const key in exam){
    sum += exam[key][2];

    student_count++;
} 
let avg = sum /student_count;

console.log("모든 학생의 수학 총 점수는 %d 점이고 평균은 %d점이다.",sum,avg);