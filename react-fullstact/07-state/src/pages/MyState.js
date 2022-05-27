import React from 'react';
import {useState} from "react";

const MyState = () => {
const [name,setname] = useState("");
const [grade,setgrade] =useState(50);

const nameState=(e)=>{
    setname(e.currentTarget.value);
} 
const gradeState=(e)=>{
    setgrade(e.currentTarget.value);
}
    return (
        <div>
            <h2>{name}님 점수는{grade}입니다. </h2>
            <hr/>
            <input type="text" onChange={nameState} placeholder="이름을 적으세요."/><br/>
            <input type="range" onChange={gradeState}/>
        </div>
    );
};

export default MyState;