import React from "react";

import { Link, Routes, Route } from "react-router-dom";

import Weater from "./weater/Weater";

const Header = () => {
  return (
    <div>
      <h1>주간날씨</h1>
      <hr />
      <Link to="/weater?id=mon">[월]</Link>
      &nbsp;|&nbsp;
      <Link to="/weater?id=tue">[화]</Link>
      &nbsp;|&nbsp;
      <Link to="/weater?id=wed">[수]</Link>
      &nbsp;|&nbsp;
      <Link to="/weater?id=thu">[목]</Link>
      &nbsp;|&nbsp;
      <Link to="/weater?id=fri">[금]</Link>
      &nbsp;|&nbsp;
      <Link to="/weater?id=sat">[토]</Link>
      &nbsp;|&nbsp;
      <Link to="/weater?id=sun">[일]</Link>
      <Routes>
        <Route path="/weater" element={<Weater/>} />
      </Routes>
    </div>
  );
};

export default Header;
