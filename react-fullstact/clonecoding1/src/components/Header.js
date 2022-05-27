import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import styled from "styled-components";

const HeaderSt = styled.header`
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  display: flex;
  padding: 8px 16px;
  align-items: center;
  justify-content: space-between;

  a {
    padding: 8px 16px;
    float: left;
    width: auto;
    border: none;
    display: block;
    outline: 0;
    letter-spacing: 4px;
    color: #222;
  }
  ul {
    display: flex;
    li {
      list-style: none ;
      a {
        padding: 8px 16px;
        float: left;
        width: auto;
        border: none;
        display: block;
        outline: 0;
        color: #222;
        letter-spacing: 4px;
      }
    }
  }
`;
const Header = () => {
  return (
    <HeaderSt>
      <Link to="#">Gourmet au Catering</Link>
      <ul>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">menu</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
      </ul>
    </HeaderSt>
  );
};

export default Header;
