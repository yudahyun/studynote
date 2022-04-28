import React from "react";
import {Link,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div>
      <nav>
        <Link to="/pages"></Link>
        <Link to=""></Link>
      </nav>
      <Routes>
        <Route path='/pages' element={<Pages></Pages>}/>
      </Routes>
      <Pages>
    </div>
  );
}

export default App;
