import React from "react";
import "../assect/css/style.css";
import cat from "../assect/img/cat.jpeg";

const CssClass =()=>{
    return (

        <div>
            <h1>css class</h1> 
            <div className={"box-style"}>
                글씨를 안넣었군요
            </div>
            <img src={cat} width="200px" height="auto" style={{display:"block"}} alt="노르웨이숲"/>
        </div>
    )
}
export default CssClass;