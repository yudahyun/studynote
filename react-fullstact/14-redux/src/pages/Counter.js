import React from 'react';

//상태값을 로드하기 위한 hook과 action 함수를 dispatxh 할 hook 참조
import { useSelector , useDispatch } from "react-redux";

//slice에 정의된 액션함수들 참조 
import {plus,minus} from "../slice/CounterSlice";


const Counter = () => {
    
    //hook을 통해 slice가 관리하는 상태값 가져오기
    const {number} =useSelector((state)=>state.counter);

    //dispatch 함수생성
    const dispatch = useDispatch();

    return (
        <div style={{display:'flex'}}>
            <button
                onClick={(e)=>{dispatch(plus(5))}}>
                +5
            </button>
            <h2>
                {number}
            </h2>
            <button
                onClick={(e)=>{dispatch(minus(5))}}>
                -5
            </button>
        </div>
    );
};

export default Counter;