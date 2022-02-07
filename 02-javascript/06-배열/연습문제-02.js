var grade = [75,82,91];
var sum = 0, avg = 0;

for(const p of grade){
    sum += p;
}

console.log(sum);
avg = sum/grade.length;
console.log(avg);