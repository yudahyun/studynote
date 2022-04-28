import React from "react";
import Data from "./Data";

const Department = () => {
  const data = { Data };
  const dataList = data.Data.department;

  //    console.log(dataList);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>학과번호</td>
            <td>학과이름</td>
            <td>위치</td>
          </tr>
        </thead>
        <tbody>
          {dataList.map((item, index) => {
            return (
              <tr>
                <td key={index}>{item.id}</td>
                <td key={index}>{item.dname}</td>
                <td key={index}>{item.loc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Department;
