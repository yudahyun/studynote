import React from "react";
import Expr from './Expr';
import {Routes,Route,Link } from "react-router-dom";
import UseLocation from './UseLocation';

function App() {
  return (
    <div>
      {/* <Link to ="/customer">다현</Link> &nbsp;
      <Link to ="/favorite">좋아하는것</Link>&nbsp;
      <Link to ="/no">입력안한것</Link>&nbsp;
      <Routes>
            <Route path ="/:username" element={<Expr/>}></Route>
      </Routes> */}
      <UseLocation/>
    </div>
   );
} 

export default App;