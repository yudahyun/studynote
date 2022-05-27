import React from "react";

import { NavLink, Routes, Route } from "react-router-dom";

import InlineCss from "./pages/InlineCss";
import CssClass from "./pages/CssClass";
import CssModule from "./pages/CssModule";

import Scss from "./pages/Scss";
import ScssModule from "./pages/ScssModule";
import StyledComponent from "./pages/StyledComponent";
import News from "./pages/News";

import "./assect/css/menu.css";

function App() {
  return (
    <div>
      <h2>05-StyleSheet</h2>

      <nav>
        <NavLink className="nomalLink" to="/inlineCss">
          InlineCss
        </NavLink>
        <NavLink className="nomalLink" to="/cssClass">
          CssClass
        </NavLink>
        <NavLink className="nomalLink" to="/cssModule">
          CssModule
        </NavLink>

        <NavLink className="nomalLink" to="/scss">
          Scss
        </NavLink>
        <NavLink className="nomalLink" to="/scssModule">
          ScssModule
        </NavLink>
        <NavLink className="nomalLink" to="/styledComponent">
          StyledComponent
        </NavLink>
        <NavLink className="nomalLink" to="/news">
          News
        </NavLink>
      </nav>

      <Routes>
        <Route path="/cssClass" element={<CssClass />} />
        <Route path="/cssModule" element={<CssModule />} />
        <Route path="/inlineCss" element={<InlineCss />} />

        <Route path="/scss" element={<Scss />} />
        <Route path="/scssModule" element={<ScssModule />} />
        <Route path="/styledComponent" element={<StyledComponent />} />
        <Route path="/news/*" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
