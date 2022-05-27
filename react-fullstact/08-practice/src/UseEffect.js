import React from 'react';

const UseEffect = () => {
    const [name,setNames] = React.useState();
    const [nickname,setNickNames] = React.useState();
    React.useEffect(() => {
        console.log("랜더링이 되었습니다. 🎨");
      
        return ()=>{
            console.log("랜더링 끝입니다. ")
        }
    },[name])
    const onChange =(e)=>{
        setNames(e.target.value);
    }
    const onChangeNickname =(e)=>{
        setNickNames(e.target.value);
    }
    return (
        <div>
            <input type="text" value={name} onChange={onChange}/>
            <input type="text" value={nickname} onChange={onChangeNickname}/><br/>
            이름:{name}<br/>
            닉네임:{nickname}
        </div>
    );
};

export default UseEffect;