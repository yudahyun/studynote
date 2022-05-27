import React from 'react';
import "./style.css";
const MyRef = () => {
    const input = React.useRef();
    const [mypassword,setpassword] = React.useState();
    const [click,setclick] = React.useState(false);
    const [validate ,setvalidate ] = React.useState(false);

    const handleChange=(e)=>{
        setpassword(e.target.value);
    }

    const handleButtonClick =()=>{
        setclick(true);
        setvalidate(mypassword === "0000");
    }

    return (
        <div>
            <input type="text" ref={input} value={mypassword} onChange={handleChange} className={click?(validate ? "success" : "failure"):""} placeholder="비밀번호를 입력해주세요." />
            <button type="button" onClick={handleButtonClick}>확인</button>
        </div>
    );
};

export default MyRef;