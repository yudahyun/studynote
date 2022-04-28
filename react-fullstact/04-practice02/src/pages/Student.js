import React from 'react';

import data from "../component/Data";
import StudentSub from "../component/StudentSub";

const Student =()=>{
   
    const {student} = data;
return(
    <table border="1">
        <thead align="center">
            <td>번호</td>
            <td>이름
            </td>
            <td>아이디</td>
            <td>학년</td>
            <td>주민등록번호</td>
            <td>생년월일</td>
            <td> 전화번호</td>
            <td>키</td>
            <td>몸무게</td>
            <td>소속학과번호</td>
            <td>담당교수번호</td>
        </thead>
        <tbody>
            {student.map((v,i)=>{
             return  <StudentSub key ={i}
                     id={v.id} name={v.name}
                     userid={v.userid} grade={v.grade}
                     idnum={v.idnum} birthdate={v.birthdate}
                     tel={v.tel} height={v.height} weight={v.weight}
                     deptno={v.deptno} profno ={v.profno}
                />
            })}
        </tbody>
    </table>
);
};

export default Student;