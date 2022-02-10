function printStar( max ,crrent = 1){
    //..구현하세요.
        if(crrent > max){
            return ;
        }else{
               let star = "";
              for(let i = 0; i < crrent; i++){
                star += "*";   
              } 
               console.log(star);
               printStar(max , crrent+1);

        }
        
    }
   

printStar(5);