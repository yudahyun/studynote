import React from "react";
import {NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import MenuLink from "./components/MenuLink";

import MyState from "./pages/MyState";
import DateRange1 from "./pages/DateRange1";
import MyReducer from "./pages/MyReducer";
import DateRange2 from "./pages/DateRange2";
import MyEffect from "./pages/MyEffect";
import MyRef from "./pages/MyRef";
import MyCallback from "./pages/MyCallback";
import MyMemo from "./pages/MyMemo";
import MyWidth from "./pages/MyWidth";



const MenuLinkContainer = styled(NavLink)`
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: 2px;
  color: #222;
  padding-right: 20px;
  &:hover {
    color: #22b8cf;
  }
  &:after {
    display: inline-block;
    padding: 0 7px;
    color: #ccc;
  }

  &:last-child {
    &:after {
      color: #fff;
    }
  }
  &.active {
    text-decoration: underline;
    color: #22b8cf;
    &:after {
      border-bottom: 4px solid #fff !important;
    }
  }
`;

const App = () => {
  return (
    <div>
      <h1>06 hook event</h1>
      <nav>
        <MenuLinkContainer to="/mystate">MyState</MenuLinkContainer>
        <MenuLinkContainer to="/daterange1">DateRange</MenuLinkContainer>
        <MenuLinkContainer to="/myeffect">MyEffect</MenuLinkContainer>
        <MenuLinkContainer to="/myref">MyRef</MenuLinkContainer>
        <MenuLinkContainer to="/myreducer">MyReducer</MenuLinkContainer>
        <MenuLinkContainer to="/mymemo">MyMemo</MenuLinkContainer>
        <MenuLinkContainer to="/mycallback">MyCallback</MenuLinkContainer>
        <MenuLinkContainer to="/mywidth">MyWidth</MenuLinkContainer>
       
      </nav>
      <hr />
      
      <Routes>
        <Route path="/mystate" element={<MyState />} exact={true} />
        <Route path="/daterange1" element={<DateRange1 />} />
        <Route path="/myeffect" element={<MyEffect />} />
        <Route path="/myref" element={<MyRef />} />
        <Route path="/myreducer" element={<MyReducer />} />
        <Route path="/daterange2" element={<DateRange2 />} />
        <Route path="/mymemo" element={<MyMemo />} />
        <Route path="/mycallback" element={<MyCallback />} />
        <Route path="/mywidth" element={<MyWidth />} />
      </Routes> 
      
    </div>
  );
};

export default App;
