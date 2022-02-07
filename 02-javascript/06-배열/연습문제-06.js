var price = [38000,20000,17900,17900];
var qty = [6,4,3,5];
var count = 0;
//8만원 이상 무료배송 건은 모두 몇개 ?

for(let i = 0 ; i < price.length ; i++){
    var sum = price[i] * qty [i];
    if(sum >= 80000){
        count ++ ;
    }
}
console.log(count);