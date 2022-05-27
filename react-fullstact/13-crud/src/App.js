import React from "react";
import {Routes,Route} from "react-router-dom";
import List from "./pages/List";
import Add from "./pages/Add";
import Edit from "./pages/Edit";


function App() {
  return (
    <div>
        <Routes>
        <Route path="/" exapt={true} element={<List/>}></Route>
        <Route path="/add" element={<Add/>}></Route> 
        <Route path="/edit/:id" element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
