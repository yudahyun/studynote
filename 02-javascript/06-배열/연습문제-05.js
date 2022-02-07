var price = [38000,20000,17900,17900];
var qty = [6,4,3,5];
var money= price[0] * qty[0];
for(let i = 0; i < price.length;i++){
   const sum = price[i] * qty[i];

   if(money < sum){
       money = sum;
   }
}

console.log(money);