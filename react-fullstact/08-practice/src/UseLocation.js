import React from 'react';
import { useLocation } from 'react-router-dom';
const UseLocation = () => {
    const location =useLocation();
    const {search} = location;
    const query  =new URLSearchParams(search);
    const showDetail = query.get("detail") === "true";

    console.log(showDetail);
    return (
        
        <div>
            <h1>useLocation</h1>
            {showDetail && <p>detail값을 true로 설정하셨군요</p>}            
        </div>
    );
};

export default UseLocation;