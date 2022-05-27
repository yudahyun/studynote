import React from 'react';
import { useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom';

const weather = { 
    "mon": ["맑음", "맑음"], 
    "tue": ["비", "맑음"], 
    "wed": ["맑음", "흐림"], 
    "thu": ["맑음", "흐림"], 
    "fri": ["흐림", "흐림"], 
    "sat": ["비", "맑음"], 
    "sun": ["맑음", "맑음"] 
   };  
  

const Week = (props) => {

    let names = useLocation();
    let params =useParams();
// 이방법도 있었네요  ~~~ 
    console.log(params.weeks);
    
    names = (names.pathname).substring(1,4); 

    const today = weather[names];
    
    // console.log(today);

    return (
        <div>
            <h2 style={{fontWeight:"bold",fontSize:"20px"}}>오전</h2>
                <p>{today[0]}</p>
                <h2 style={{fontWeight:"bold",fontSize:"20px"}}>오후</h2>
                <p>{today[1]}</p>
        </div>
    );
};

export default Week;