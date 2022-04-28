import React from "react";
import PropTypes from "prop-types";

const GradeItem =({name,level,gen,kor,eng,math,sic})=>{
    const sum = kor+eng+math+sic;
    const avg = sum/4;
    return(
        <tr>
            <td>{name}</td> 
            <td>{gen}</td>        
            <td>{kor}</td> 
            <td>{eng}</td>           
            <td>{math}</td>
            <td>{sic}</td>
            <td>{sum}</td>
            <td>{avg}</td>
        </tr>
    )
}

GradeItem.propTypes ={
    name:PropTypes.string,
    gen:PropTypes.string
}

GradeItem.defaultProps={
    name:"이름없음",
    gen:"여",
    kor:0,
    eng:0,
    math:0,
    sic:0
}
export default GradeItem;