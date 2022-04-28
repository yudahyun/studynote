import React from "react";
import Data from "./Data";

const  Professor = () => {
  const data = { Data };
  const dataList = data.Data.professor;

  //    console.log(dataList);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>교수번호</td>
            <td>교수이름</td>
            <td>아이디</td>
            <td>직급</td>
            <td>급여</td>
            <td>입사일</td>
            <td>보직수당</td>
            <td>소속학과번호</td>
          </tr>
        </thead>
        <tbody>
          {dataList.map((item, index) => {
            return (
              <tr>
                <td key={index}>{item.id}</td>
                <td key={index}>{item.name}</td>
                <td key={index}>{item.userid}</td>
                <td key={index}>{item.position}</td>
                <td key={index}>{item.sal}</td>
                <td key={index}>{item.hiredate.substring(0,10)}</td>
                <td key={index}>{item.comm}</td>
                <td key={index}>{item.deptno}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Professor;
