import React from 'react';

function 숫자바꾸기(state,action){
    console.log(state,action);
    switch (action){
        case "UP":
            return state +1;
        case "DOWN" :
            return state -1;
        default:
            return 0;
        
    }
}
const MyReducer = () => {
    
    const [숫자,숫자바꿈] = React.useReducer(숫자바꾸기,0);
    return (
        <div>
            <h2>냠냠굿</h2>
            <p>{숫자}</p>
            <button type="button" onClick={e=>{숫자바꿈("UP")}}>UP</button>
            <button type="button" onClick={e=>{숫자바꿈("DOWN")}}>DOWN</button>
        </div>
    );
};

export default MyReducer;