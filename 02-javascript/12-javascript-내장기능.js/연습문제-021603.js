str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다."

let count = 0;
let word = "수업시간";
let find = true;
while(find){
    p = str.indexOf(word);
    find = p > -1;
    if(find){
        count++;
        str = str.substring(p+word.length);
    }
}
 console.log(count); 