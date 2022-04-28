import React from "react";

import tableStyle from "../assect/css/tableStyle.module.css";

const StudentSub = ({ id, name, userid ,grade,idnum,birthdate,tel,height,weight,deptno,profno}) => {
  return ( 
        <tr className={tableStyle.trStyle}>
           <td className={tableStyle.td}>{id}</td>
           <td className={`${tableStyle['td']} ${tableStyle['bold']}`}>{name}</td>
           <td className={tableStyle.td}>{userid}</td>
           <td className={tableStyle.td}>{grade}</td> 
           <td className={tableStyle.td}>{idnum.substring(0,7)+"-*******"}</td> 
           <td className={tableStyle.td}>{birthdate.substring(0,10)}</td>
           <td className={tableStyle.td}>{tel}</td>
           <td className={tableStyle.td}>{height}</td>
           <td className={tableStyle.td}>{weight}</td>
           <td className={tableStyle.td}>{deptno}</td>
           <td className={tableStyle.td}>{profno}</td>
        </tr>
    );
};


export default StudentSub;
