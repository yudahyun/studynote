const solution = x =>{
    //배열을 문자열로 만든다.
    const sx = new String(x);
    //합계
    let sum = 0;
    //반복
    for(const i of sx){
        sum += parseInt(i);
    }
    //숫자가 합으로 나눴을때 0이면 참 : 거짓 
    return x % sum == 0 ? true : false;
};
console.log(solution(10));

