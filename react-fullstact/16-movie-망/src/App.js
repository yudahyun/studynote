import React, { memo } from 'react';
import MovieRank from './pages/MovieRank';

import {Routes,Route,Link} from "react-router-dom";
const App = memo(() => {
  return (
    <div>
      <Link to="/movieRank">무비랭크</Link>
      <Routes>
        <Route path="/movieRank" element={<MovieRank/>}></Route>
      </Routes>
    </div>
  );
});

export default App;