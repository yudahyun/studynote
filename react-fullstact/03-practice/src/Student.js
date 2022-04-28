import React from "react";
import Data from "./Data";

const Student = () => {
  const data = { Data };
  const dataList = data.Data.student;

  //    console.log(dataList);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>학생번호</td>
            <td>학생이름</td>
            <td>학생아이디</td>
            <td>학년</td>
            <td>주민번호</td>
            <td>생년월일</td>
            <td>번호</td>
            <td>키</td>
            <td>몸무게</td>
            <td>소속학과번호</td>
            <td>담당교수번호</td>
          </tr>
        </thead>
        <tbody>
          {dataList.map((item, index) => {
            return (
              <tr>
               <td key={index}>{item.id}</td>
                <td key={index}>{item.name}</td>
                <td key={index}>{item.userid}</td>
                <td key={index}>{item.grade}</td>
                <td key={index}>{item.idnum.substring(0,6)+"- *******"}</td>
                <td key={index}>{item.birthdate.substring(0,10)}</td>
                <td key={index}>{item.tel}</td>
                <td key={index}>{item.height}</td>
                <td key={index}>{item.weight}</td>
                <td key={index}>{item.deptno}</td>
                <td key={index}>{item.profno}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Student;
