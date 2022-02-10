var price = [[500,291],[320,586],[100,460],[120,558],[92,18],[30,72]];
var total =  0;
for(let i = 0; i <price.length; i++){
    const sum = price[i][0] * price[i][1];
    total += sum;
}
console.log(total);
    