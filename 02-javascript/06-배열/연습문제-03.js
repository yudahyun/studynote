var time =  [7,5,5,5,5,10,7];
var money = 0;
for(let i = 0; i < time.length;i++){
   //let x = (i<4 ) ? 4500 : 5200 ;
    money += time[i] * ((i<4 ) ? 4500 : 5200 );
    
}
console.log(money);