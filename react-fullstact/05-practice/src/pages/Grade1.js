import React from "react";
import Theads from "./Theads";
import GradeData from "../GradeData";


const keys = Object.keys(GradeData);
const heads = GradeData[keys[0]];

//1학년꺼
// console.log(heads);

const GradeItem1 = ({props}) => {
  const sum = props["국어"]+props["영어"]+props["수학"]+props["과학"];
  const avg = parseInt(sum / 4);

  return (
    <tr>
      <td>{props["이름"]}</td>
      <td>{props["성별"]}</td>
      <td>{props["국어"]}</td>
      <td>{props["영어"]}</td>
      <td>{props["수학"]}</td>
      <td>{props["과학"]}</td>
      <td>{sum}</td>
      <td>{avg}</td>
    </tr>
  )
};

const Grade1 = () => {
  return (
    <table border="1">
      <Theads />
      <tbody>
            <GradeItem1 props={heads[0]}/>
            <GradeItem1 props={heads[1]}/>

      </tbody>
    </table>
  );
};
export default Grade1;
