// function printStar(max){
//     for(let i = 0 ; i <max;i++){
//         let star = '';
//         for(let j = 0 ; j <max-i ;j++){
//             star += "*"
//         }
//         console.log(star);
//     }
// }
// printStar(5);

function printStar(max) {
    //... 구현하세요 ...
    for(let i = 0 ; i < max; i ++){
        let star  = "";
        for(let j = 0; j < i+1 ; j++){
            
           star += "*";
        }
        console.log(star);                 
           
     } 
}
function printStar(max,crrent =1 ) {
    //... 구현하세요 ...
    for(let i = 0 ; i < max; i ++){
        let star  = "";
            
        star += "*";
        
        console.log(star,crrent+1);                 
           
     } 
}
printStar(5);