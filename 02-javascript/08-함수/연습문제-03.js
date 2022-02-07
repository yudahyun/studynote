function myGame(n){
   //총박수 몇번 쳤는지
    let count = 0;

    for(let i = 1; i <=n;i++){
        
            //console.log(i);
            //현재숫자 i를 문자열로 변환함.
            const str = i + "";
            //빈 문자열을 더한거임


            //출력할 문자열
            let say = "";
            let clap = 0;

            //각 글자 수만큼 반복
            for(let j of str){
               // console.log(j);
                if(j == "3" || j == "6" || j== "9"){
                    say += "짝";
                    clap ++;
                }
            
            }
            if(clap == 0){
                    console.log(i);
            }else{
                    console.log("%s (%d) -- > %d번",say,i,clap);
                    count += clap;
            }
        
          
           
    }
    console.log("박수를 총 %d번 쳤습니다.",count);
}
myGame(35);

