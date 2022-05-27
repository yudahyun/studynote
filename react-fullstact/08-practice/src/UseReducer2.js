import React from 'react';

function reducer(state,action){
    return{
        ...state,
        [action.name]:action.value
    }
}
const UseReducer2 = () => {
     const [state,dispatch] = React.useReducer(reducer,{
         name:"",
         nickname:""
     })

     const {name,nickname} = state;
     const onChange =e=>{
         dispatch(e.target);
     }
    return (
        <div>
            <input name="name" value={name} onChange={onChange}/>
            <input name="nickname" value={nickname} onChange={onChange}/><br/>
            이름:{name}<br/>
            닉넴:{nickname}
        </div>
    );
};

export default UseReducer2;