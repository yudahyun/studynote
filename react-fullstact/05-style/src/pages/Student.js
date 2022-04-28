import React from 'react';

import data from "../component/Data";
import StudentSub from "../component/StudentSub";
import tableStyle from "../assect/css/tableStyle.module.css";

const Student =()=>{
   
    const {student} = data;
return(
    <table className ={tableStyle.tableStyle}>
        <thead className={tableStyle.Thead}>
            <th className={`${tableStyle['td-st']} ${tableStyle['td-first']} `}>번호</th>
            <th>이름</th>
            <th>아이디</th>
            <th>학년</th>
            <th>주민등록번호</th>
            <th>생년월일</th>
            <th> 전화번호</th>
            <th>키</th>
            <th>몸무게</th>
            <th>소속학과번호</th>
            <th>담당교수번호</th>
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