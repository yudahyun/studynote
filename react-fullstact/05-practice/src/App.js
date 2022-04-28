import React from "react";

import { Link, Routes, Route } from "react-router-dom";

import GradeData from "./GradeData";

import Grade1 from "./pages/Grade1";
import Grade2 from "./pages/Grade2";
import Grade3 from "./pages/Grade3";
import Grade4 from "./pages/Grade4";



function App() {
  // const { Grade } = GradeData;

  // console.log(GradeData);
  // const keys = Object.keys(GradeData);
  // console.log(keys);
  // console.log(GradeData["1학년"]);
  return (
    <div>
      <nav>
        {/* {keys.map((key, index) => {
          let num = Number(index+1);
          let toLink = "grade" + num;

          return <Link to={toLink}>{key}</Link>;
        })} */}
        <Link to="/grade1">1학년</Link>
        <Link to="/grade2">2학년</Link>
        <Link to="/grade3">3학년</Link>
        <Link to="/grade4">4학년</Link>
      </nav>

      <Routes>
        {/* {keys.map((key, index) => {
          let num = Number(index+1);
          let pathLink = "/grade" + num;
          console.log(num);

          let elementLink = "<Grade" + num + "/>";
          <Route path={pathLink} element={elementLink} />;
        })} */}
       <Route path="/grade1" element={<Grade1 items={GradeData["1학년"]}/>} />;
       <Route path="/grade2" element={<Grade2 items={GradeData["2학년"]}/>} />;
       <Route path="/grade3" element={<Grade3 items={GradeData["3학년"]}/>} />;
       <Route path="/grade4" element={<Grade4 items={GradeData["4학년"]}/>} />;

      </Routes>
      
    </div>
  );
}

export default App;
