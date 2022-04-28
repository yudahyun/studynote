import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Department from "./Department";
import Prosessor from "./Prosessor";
import Student from "./Student";

function App() {
  return (
    <div>
      <h2>Exam 03</h2>
      <nav>
        <Link to="/department">[학과목록]</Link>
        <Link to="/prosessor">[교수목록]</Link>
        <Link to="/student">[학생목록]</Link>
      </nav>
      <hr/>
      <Routes>
        <Route path="/department" element={<Department/>}></Route>
        <Route path="/prosessor" element={<Prosessor/>}></Route>
        <Route path="/student" element={<Student/>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
