// for (let i = 0; i < 4; i++) {
  
//   let str = "";

//   for (let j = 0; j < 4; j++) {
//     str += "?";
//     if(j<4){
//         str += " ";
//     }
//   }
//   console.log(str);
// }


for(let i = 0 ; i < 10 ; i ++){
    
    let str = "";
   
    for (let j = -1; j < i;  j ++){
        str += "*";
       
        
    }
    for(let k = 10 ; i < k;k --){
        str += "-";

    }
 
    
    console.log(str);
}

let number =1; 