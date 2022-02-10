function myGame(n){
   // console.log(i);
    for(let i = 1 ; i <= n ; i++){

        
        const str = i + "";

        let say = "";
        let clap =0;

        for(let j of str){
            if(i == "3" || i == "6" || i == "9"){
                say += "짝";
                console.log(i);
                        }
        }
        
    }
    
}
myGame(35);