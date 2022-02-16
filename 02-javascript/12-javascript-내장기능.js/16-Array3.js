const arr = [10,20,30,40,50];

for(let i = 0; i < arr.length; i++){
    if(i==3){
        console.log("반복중단");
        break;
    }
    console.log("%d번째 원소는 == > %d",i,arr[i]);
}

//배열의 값과 인덱스 전달
arr.forEach((v,i)=>{
    if(i==3){
        console.log("반복중단");
        return;
    }
    console.log("%d번째 원소는 == > %d",i,arr[i]);

});
//true 가 있으면 중단
arr.some((v,i)=>{
    if(i==3){
        console.log("반복중단");
        return true;
    }
    console.log("%d번째 원소는 == > %d",i,arr[i]);

});


const hello = arr.map((v,i)=>v+1);
console.log(hello);