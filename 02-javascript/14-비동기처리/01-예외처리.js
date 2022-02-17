const data = [1,2,3,4];

//console.log(data);

try{
    for(let i = 0 ; i < 10 ; i++){
        //data[i]=data.toFixed(2);
        console.log(data[i].toFixed(2));
    }
}catch(err){
    console.error(err.name+"에라");
    console.error(err.message);
    
}finally{
    console.log("탐색이 종료되었습니다");
}