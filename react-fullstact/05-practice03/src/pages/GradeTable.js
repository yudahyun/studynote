import React from "react";
import GradeItem from "../component/GradeItem";
import {useParams} from "react-router-dom";
import GradeData from "../GradeData";

const GradeTable =()=>{
    const {level} = useParams();
    const a = useParams();

    console.log(level);
    console.log(a);

    const key = `${level}학년`;
    const currentData = GradeData[key];
    
    // console.log(currentData);

    return(
        <div>
            <h2>
                {key}
            </h2>
            <table border="1" cellspacing="7">
                <thead>
                    <td>이름</td>
                    <td>성별</td>
                    <td>국어</td>
                    <td>영어</td>
                    <td>과학</td>
                    <td>수학</td>
                    <td>총점</td>
                    <td>평균</td>
                </thead>
                <tbody>
                        {
                            currentData.map((v,i)=>{
                                return(<GradeItem key={i} name={v.이름} gen={v.성별} kor={v.국어} eng={v.영어} math={v.수학} sic={v.과학} />)
                            })
                        }
                        
                </tbody>
            </table>
        </div>
    )
}

export default GradeTable;