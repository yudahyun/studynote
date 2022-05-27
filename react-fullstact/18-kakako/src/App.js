import React, { memo } from 'react';
import Top from "./components/Top";
import KakaoSearch from './components/KakaoSearch';
import {Routes,Route} from "react-router-dom";

const App = memo(() => {
  return (
    <div>
      
      <Top/>
    <Routes>
      <Route path="/:api" element={<KakaoSearch/>}/>
    </Routes>
    </div>
  );
});

export default App;