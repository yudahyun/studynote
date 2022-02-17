 let count1 = 0 ;

// const timeId1 = setInterval(()=> {
//     count1++;
//     console.log("타이머 "+ count1);
//     if(count1 ==5){
//         console.log("타이머종료");
//         clearInterval(timeId1);
//     }
//    // clearInterval(timeId1);
// },1000);

setInterval(()=>{
    count1++;
    console.log("타이머 "+ count1);
    clearInterval();
    
},1000);