var student = ["둘리",'또치',"도우너","희동"];
var grade =[
    [78,89,96],
    [62,77,67],
    [54,90,80],
    [100,99,98]
]

var sum = 0, avg =0;
for (let i = 0 ; i<grade.length; i++){
    sum = 0;
    for(let j = 0; j <grade[i].length; j++){
       sum += grade[i][j];
    }
   
       
    //console.log(sum);    
    avg = sum / grade[i].length;
    console.log(sum,avg);

}
