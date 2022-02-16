let count1 = 0 ;

const timeId1 = setInterval(()=> {
    count1++;
    console.log("타이머 "+ count1);
    clearInterval(timeId1);
},500);