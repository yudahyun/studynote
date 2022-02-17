function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

var lotto = [];

for(let i=0 ; i < 6 ; i++){
   // while(true){
    const rnd = random(1,6);
  //if(!lotto.includes(rnd)){
        lotto.push(rnd);
//         break;
//   }else{
    
//   }
//}
}
   console.log(lotto);

