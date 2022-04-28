import React from 'react';
import { useLocation } from 'react-router-dom';
import GradeData from "../GradeData";

const GradeGet = () => {
    //주소창에 뭐 찍혔는지 확인
    const location = useLocation();
    // console.log(location);

    // 서치를 불러와
    const {search}= location;
    
    //그걸 수정,사용 할 수 있게 넣어
    const query = new URLSearchParams(search);
    
    const id = parseInt(query.get("id"));
    // console.log(id);

    
    const list = GradeData["item"];
    console.log(list);


    let item = null;
    
    

    if(id == items[id]){
        console.log("똑");
    }

    return (
        <div>
           <h1>{items[id]}</h1>
        </div>
    );
};

export default GradeGet;