const myData = [ 4, 5 , 1, 3 ,2];

for ( let i = 0 ; i < myData.length-1 ; i ++){
    for (let j = i +1;j <myData.length; j++){
        if (myData[i] > myData [j]){

            const tmp = myData[i];
            myData[i] = myData [j];
            myData [j] = tmp;

        }
    }
}
console.log(myData);