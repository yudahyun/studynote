import React from "react";
import { useState } from "react";

function App() {
  const [숫자, 숫자바꿈] = useState("");
  const myResult = React.useRef();

  React.useEffect(() => ()=>{ myResult.current.innerHTML = ""}, [숫자]);
  
  const 별찍기 = (e) => {
    const max = e.target.value;
    let star = "";

    for (let i = 0; i < max; i++) {
      for (let j = 0; j <= i; j++) {
        star += "*";
      }
      star += "</br>";
      myResult.current.innerHTML = star;
    }

    숫자바꿈(() => {
      // console.log(myResult);
    });
  };

  return (
    <div>
      <h2>Exam07</h2>
      <p>useState,useEffect,useRef를 사용한 별찍기</p>
      <hr />
      rowNum:
      <input onChange={별찍기} type="number" value={숫자} />
      <hr />
      <div ref={myResult}></div>
    </div>
  );
}

export default App;
