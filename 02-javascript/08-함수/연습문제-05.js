function printStar( num ,crrent = 1){
     if(num < crrent){
            return;
        }else{
            let star = "";
            for(let i = 0; i < num-crrent+1;i++){
                  star += "*";               
            }
            console.log(star);
            
            return printStar(num,crrent+1);
            
        }   
    }
   
printStar(5);