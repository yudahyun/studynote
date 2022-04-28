import React from "react";
import {Routes,Link,Route} from "react-router-dom";

import Expr from "./pages/Expr";
import If1 from "./pages/If1";
import If2 from "./pages/If2";
import If3 from "./pages/If3";
import If4 from "./pages/If4";
import Loop1 from "./pages/Loop1";
import Loop2 from "./pages/Loop2";
import Loop3 from "./pages/Loop3";


import Practices01 from "./practice/Practice01";
import Practices02 from "./practice/Practice02";
import Practices03 from "./practice/Practice03";
import Practices04 from "./practice/Practice04";
import Practices05 from "./practice/Practice05";

function App() {
  return (
    <div>
      <h3> 03-jsx</h3>
      <nav>
      <Link to ='/expr'>[Expr]</Link>
      <Link to ='/if1'>[If1]</Link>
      <Link to ='/if2'>[If2]</Link>
      <Link to ='/if3'>[If3]</Link>
      <Link to ='/if4'>[If4]</Link>
      <Link to='/loop1'>[loop1]</Link>
      <Link to='/loop2'>[loop2]</Link>
      <Link to='/loop3'>[loop3]</Link>
      </nav>

      <Routes>
        <Route path="/expr" element={<Expr/>}/>
        <Route path="/if1" element={<If1/>}/>
        <Route path="/if2" element={<If2/>}/>
        <Route path="/if3" element={<If3/>}/>
        <Route path="/if4" element={<If4/>}/>
        
        <Route path="/loop1" element={<Loop1/>}/>
        <Route path="/loop2" element={<Loop2/>}/>
        <Route path="/loop3" element={<Loop3/>}/>
      </Routes>

      <hr/>
      <Practices01/>
      <hr/>
      <Practices02/>
      <hr/>
      <Practices03/>
      <hr/>
      <Practices04/>
      <hr/>
      <Practices05/>
    </div>
  );
}

export default App;
