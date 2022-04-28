import React from "react";

const Practice04 =()=>{
    let span = [];
    const createNum =()=>{
        for(let i = 10; i<0; i--){
            span.push(
                <span key={i}>{i}</span>
            );
        }
        return span;
    };
 return (
    <div>
        {createNum}
    </div>
    );
} 
export default Practice04;