const myArr = [2, 5, 10, 99];
let 최대 = myArr[0];

for (let i = 1; i < myArr.length ; i++){

    if(최대 < myArr[i]){
        최대 = myArr[i] ;
    }    
}


console.log(최대);

const myArr2 = [3,33,333,3333];

let max = myArr2[0];

for(let i = 1 ; i < myArr.length ; i++){
    if ( i < myArr2 [i]){
        max = myArr2 [i];
    }
}
console.log(max);