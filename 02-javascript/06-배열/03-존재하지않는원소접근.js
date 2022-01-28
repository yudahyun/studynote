let myArr = [100]

let item1 = myArr[0];
//console.log(item1);

let item2 =myArr[1];

if(item2 !==undefined){
    //console.log("1번째 원소 존재함");
}else{
    //console.log("1번째 원소 존재하지않음");
}

let [a,b] = myArr;
console.log(a);
console.log(b);