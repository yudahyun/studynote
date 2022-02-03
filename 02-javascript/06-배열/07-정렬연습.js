const myArry = [5,3,4,2,1];

for(let i = 0;i<myArry.length-1;i++){
    for(let j = i +1; j<myArry.length;j++){
        if(myArry[i]>myArry[j]){
            const tmp = myArry[i];
            myArry[i] = myArry[j];
            myArry[j] =tmp;
        }
    }
}
console.log(myArry);