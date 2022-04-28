import React from "react";

import data from "../component/Data";
// import DepartmentSub from "../component/DepartmentSub";

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




const Department = () => {
    const {department} = data;
    // console.log(department);
    
    return (
    <table border="1">
      <thead align="center">
        <td>학과번호</td>
        <td>학과이름</td>
        <td>위치</td>
      </thead>
      <tbody>
        {department.map((v, i) => {
          return <DepartmentSub key={i} id={v.id} dname={v.dname} loc={v.loc} />
        })}
      </tbody>
    </table>
  );
};

export default Department;
