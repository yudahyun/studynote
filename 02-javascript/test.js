let student = ["재석","민영","종민","광수","승기","세정"];
let grade = [ 82,91,54,62,88,90];

let firstGrade = grade[0];

for(let i = 0 ;i < grade.length;i++ ){
    
    for(let j = 0 ; j < grade.length; j++){

        if(grade[i] > grade[j]){
            let p = grade[i];
            grade[i] = grade[j];
            grade[j] = p;
            
            
        }
        
    }

}
console.log(grade);