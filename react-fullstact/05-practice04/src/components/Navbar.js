import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const NavbarDiv = styled.nav`
  overflow: hidden;
  background-color: #333;
  position: sticky;
  top: 0;
  nav {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 20px;
      text-decoration: none;
      &.right {
        margin-left: auto;
      }
      &:hover {
        background-color: #ddd;
        color: black;
      }
      &.active {
        background-color: #666 !important;
        color: white !important;
      }
    }
  }
`;
const Navbar = () => {
  return (
    <NavbarDiv>
      <nav>
    
        
        <NavLink to="#" exact={true}>Homes</NavLink> 
        <NavLink to="#">Link2</NavLink>
        <NavLink to="#">Link1</NavLink>
        <NavLink to="#" className="right">Link3</NavLink>
        
      </nav>
    </NavbarDiv>
  );
};

export default Navbar;
