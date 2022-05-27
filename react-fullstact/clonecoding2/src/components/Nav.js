import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import styled from "styled-components";

const Nav = () => {
  const NavSt = styled.nav`
    background: #fff;
    width: 100vw;
    z-index: 1;
    a {
      color: #000;
      letter-spacing: 4px;
      padding: 8px 16px;
      float: left;
      width: auto;
      border: none;
      display: block;
      outline: 0;
      text-decoration: none;
    }
  `;
  return (
    <NavSt
      className=" normal-padding display-flex
         nav-shadow position-fixed justify-space-between"
    >
      <Link className="home" to="/">
        <b>BR</b> Architects
      </Link>
      <div className="link-list display-flex">
        <Link to="/">Projects</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </div>
      <Routes>
        <Route exact path="/*"></Route>
      </Routes>
    </NavSt>
  );
};

export default Nav;
