import React from 'react';


const Practices01=()=>{
    
    const numOfApples = 123;

    let basket = parseInt(numOfApples / 10);
    let exapple = parseInt(numOfApples % 10);
     
   

    return(
        <div>
            사과가 {numOfApples}개 일때 <br/>
           
           바구니의 수는 { exapple < 10 ? basket +1 : basket}개 이다.
        </div>

    );

}
export default Practices01;
