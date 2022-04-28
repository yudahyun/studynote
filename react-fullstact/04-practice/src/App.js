import React from "react";

import GradeItem from "./GradeItem";

function App() {
  const myStyle = {
    border: "1px solid #000",
  };
  return (
    <table>
      <thead>
        <tr>
          <th style={myStyle}>이름</th>
          <th style={myStyle}>학년</th>
          <th style={myStyle}>성별</th>
          <th style={myStyle}>국어</th>
          <th style={myStyle}>영어</th>
          <th style={myStyle}>수학</th>
          <th style={myStyle}>과학</th>
          <th style={myStyle}>총점</th>
          <th style={myStyle}>평균</th>
        </tr>
      </thead>
      <GradeItem />
    </table>
  );
}

export default App;
