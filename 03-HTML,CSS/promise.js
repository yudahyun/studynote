"use strict";

//1.producer
//whem new Promise is created, the executor runs automatically,
const promise = new Promise((resolve,reject)=>{
    //doing some heavy work(newtwork,files)
    console.log("doing someting");
    setTimeout(()=>{
        resolve('다현');
    },2000);
});



promise.then((value)=>{
    console.log(value);
})

//최종 데이터 전달 

//resolve, reject

