function random(n1,n2){
    return parseInt(Math.random()* (n2 - n1 + 1)) + n1;
}

function getLuckResult(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("당신의 추첨 결과는?");
            const lucky =random(1,9);
            if(lucky %2 == 0){
                resolve({msg:"당첨",a:1,b:2});
            }else{
                reject({msg:"꽝",d:5});
            }
        },1000)
    });
}


const mypromise = getLuckResult();
mypromise.then(({msg,a,b})=>{
    console.error(msg,a,b);
}).catch(({msg,d})=>{
   console.error(msg.d); 
}).finally(()=>{
    console.log("끝");
});
