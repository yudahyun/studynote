import React from "react";
import styled from "styled-components";

const FooterSt = styled.footer`
  color: #000;
  background-color: #f1f1f1;
  text-align: center;
  padding-top: 32px;
  padding-bottom: 32px;
  a {
    text-decoration: underline;
    color: #000;

    &:hover {
      color: green;
    }
  }
`;
const Footer = () => {
  return (
    <FooterSt>
      Powered by
      <a href="#">w3.css</a>
    </FooterSt>
  );
};

export default Footer;
