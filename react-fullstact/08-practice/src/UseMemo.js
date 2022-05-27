import React from 'react';

const getAVG = numbers=>{
    console.log("계산중");
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b)=>a+b);
    return sum / numbers.length;
};
const UseMemo = () => {
    const [list,setList] =React.useState([]);
    const [number,setNumber]= React.useState("");

    const onChange =React.useCallback(e=>{
        setNumber(e.target.value);
    },[]); // 컴포넌트가 처음으로 렌더링 될 때만 함수 생성

    const onInsert =React.useCallback(()=>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber("");
    },[number,list])//number 혹은 list 가 변경 되었을 때만 함수 생성 

    return (
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((v,i)=>{
                   return  <li key={i}>{v}</li>
                })}
            </ul>
            <p>평균값 : {getAVG(list)}</p>
        </div>

    );
};

export default UseMemo;