import React from "react";

import data from "../component/Data";
import ProfessorSub from "../component/ProfessorSub";

const Professor = () => {
  const { professor } = data;
console.log(professor.deptno);
  return (
    <table border="1">
      <thead align="center">
        <td>고유번호</td>
        <td>교수이름</td>
        <td>아이디</td>
        <td>직책</td>
        <td>급여</td>
        <td>입사일</td>
        <td>보직수당</td>
        <td>소속학과번호</td>
      </thead>
      <tbody>
          {professor.map((v,i)=>{
           return    <ProfessorSub key={i}
              id={v.id} name={v.name} userid={v.userid}
              position={v.position} sal={v.sal} hiredate={v.hiredate} comm={v.comm} deptno={v.deptno}/> 
          })}
      </tbody>
    </table>
  );
};

export default Professor;
