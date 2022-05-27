import React from "react";
import {Route,Routes} from "react-router-dom";

import MenuLink from "./component/MenuLink";
import Counter from "./pages/Counter";
import Department from "./pages/Department";
import News from "./pages/News";

function App() {
  return (
    <div>
      <h1>리덕스</h1>
      <nav>
        <MenuLink to="/counter">Counter</MenuLink>
        <MenuLink to="/department">department</MenuLink>
        <MenuLink to="/News">news</MenuLink>
      </nav>
      <Routes>
         <Route path="/counter" element={<Counter/>} /> 
         <Route path="/department" element={<Department/>} />
         <Route path="/News" element={<News/>} />
      </Routes>

    </div>
  );
}

export default App;
