import React from "react";
import PropTypes from "prop-types";


const GradeItem = ({name,level,gen,kor,eng,math,sic})=>{
    const sum = parseInt(kor+eng+math+sic);
    const avg =parseInt(sum / 4);

    
    return(
        <tr align="center">
            <td>{name}</td>
            <td>{gen}</td>
            <td>{kor}</td>
            <td>{eng}</td>
            <td>{math}</td>
            <td>{sic}</td>
            <td>{sum}</td>
            <td>{avg}</td>
        </tr>
    );
}


GradeItem.propTypes={
    name:PropTypes.string,
    gen:PropTypes.string,
  }

export default GradeItem;