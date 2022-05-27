import React from 'react';
import GradeData from "./GradeData";
import GradeItem from './GradeItem';



const GradeTable = () => {
    

    return (
        <table border="1">
            <thead>
                <td>이름</td>
                <td>학년</td>
                <td>성별</td>
                <td>국어</td>
                <td>영어</td>
                <td>과학</td>
                <td>수학</td>
                <td>총점</td>
                <td>평균</td>
            </thead>
          
                {GradeData.map((v,i)=>{
                
                  return(  <GradeItem key={i}
                    name={v.name}
                    level={v.level}
                    sex={v.sex}
                    kor={v.kor}
                    eng={v.eng}
                    math={v.math}
                    sic={v.sic} />
                    )
                })}
                
          
        </table>
    );
};

export default GradeTable;