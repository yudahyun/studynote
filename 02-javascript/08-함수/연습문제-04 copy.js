function printStar( max ){
    //..구현하세요.
        var star = "";
        star = "*";
        if(max = 1){
            return  star;
            console.log("*");
        }
        star += star  ;
        console.log(star);
        
        
       
  
}

printStar(5);