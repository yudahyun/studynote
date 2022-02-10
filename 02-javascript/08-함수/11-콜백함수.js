function something (x,y,cd){
    const result = cd(x,y);
    console.log(result);
}


//유형 1
function plus (a,b) {return a + b};
function minus(a,b) {return a- b};

something (100, 200, plus);
something (100,200,minus);

//유형2

something(200,100, function(a,b){
    return a * b;
});

something(200,100 ,function(a,b){
    return a -b;
});

//유형 3
something(5,7,(a,b)=>{
    for(let i = a ; i < 7 ; i++ ){
        console.log(i * 7);
    }
});


something(5,7,(a,b)=>console.log(a+b));