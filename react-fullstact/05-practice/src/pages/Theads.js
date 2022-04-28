import React from "react";
import GradeData from "../GradeData";

const keys = Object.keys(GradeData);
const heads = GradeData[keys[0]];
const TableHeads = Object.keys(heads[0]);


const Theads = () => {
    return (
      
          <thead align="center">
                {TableHeads.map((v,i)=>{
                    return(<td v={v}>{v}</td>);
                })}
                <td>총점</td>
                <td>평균</td>
          </thead>
        
      );
  
};

export default Theads;
