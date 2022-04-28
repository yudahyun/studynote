import React from "react";

import PropTypes from "prop-types";

const MyPropTypesSub =({name,age,hobby})=>{
    return(
        <div>
            <h3>MyPropsSub</h3>
            <p>
                제 이름은 <b>{name} </b> 나이는 <b>{age}</b>입니다.
            </p>
            <p>
                {hobby && (<span>취미는 {hobby} 입니다.</span>)}
            </p>
        </div>
    );
};

MyPropTypesSub.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    
    hobby:PropTypes.string.isRequired,
}

export default MyPropTypesSub;