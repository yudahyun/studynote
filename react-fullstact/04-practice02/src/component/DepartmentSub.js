import React from "react";
import PropTypes from "prop-types";

const DepartmentSub = ({ id, dname, loc }) => {
  return ( 
        <tr>
           <td>{id}</td>
           <td>{dname}</td>
           <td>{loc}</td> 
        </tr>
    );
};
DepartmentSub.propTypes ={
    id:PropTypes.number
}
DepartmentSub.defaultProps={
    id:0
}


export default DepartmentSub;
