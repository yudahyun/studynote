import React from 'react';
import {Link ,Routes,Route}  from "react-router-dom";
// import Meta from "./component/Mata";
import GradeTable from "./pages/GradeTable";

import GradeGet from "./pages/GradeGet";
function App() {
  return (
    <div>
      {/* <Meta/> */}
      <h1>성적표</h1>
        <nav>
          <Link to ="/grade_table/1">1학년</Link>
          <Link to ="/grade_table/2">2학년</Link>
          <Link to ="/grade_table/3">3학년</Link>
          <Link to ="/grade_table/4">4학년</Link>
          <Link to ="/grade_get/?id=101&msg=hello">Get</Link>
          <Link to ="/grade_get/?id=202&msg=world">Get</Link>

          <Routes>
            <Route path="/grade_table/:level" element={<GradeTable/>} />
            <Route path="/grade_get" element ={<GradeGet/>}/>
          </Routes>
        </nav>
    </div>
  );
}

export default App;
