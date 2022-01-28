// let 공간 = "";

// for(let 숫자 = 1; 숫자 < 10 ; 숫자 ++){
    
//     공간 += 숫자;
//     if(숫자+1 < 10){
//         공간 += ",";
//     }
// }

// console.log(공간);
// let str = "";

// for(let i = 1 ; i < 10 ; i ++){
//     str += i;
//     if(i+1 < 10){
//         str += ",";
//     }
// }

// console.log(str);
//주사위 첫번째 

let count = 0;
for(let i = 1;i < 6;i++){
    for(let j = 1;j < 6;j++){
        if(i + j == 6){
            console.log("[%d,%d]",i,j);
            count ++;
           
        }
    }
}
console.log("경우의 개수는 %d개 입니다.",count)