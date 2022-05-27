import React, { memo } from 'react';
import {Routes,Route} from "react-router-dom";
import MovieRank from "./pages/MovieRank";
import MenuLink from "./components/MenuLink"
import Car from "./pages/Car";

const App = memo(() => {
  return (
    <div>
      <h2>영화순위</h2>
      <MenuLink to="/movie">영화</MenuLink>
      <MenuLink to="/car">교통사고 현황</MenuLink>
    <Routes>
      <Route path="/car" element={<Car/>}></Route>
      <Route path="/movie" element={<MovieRank/>}></Route>
    </Routes>

    </div>
  );
});

export default App;