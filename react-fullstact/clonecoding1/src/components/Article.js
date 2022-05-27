import React from "react";
import styled from "styled-components";
import Ham from "../asset/img/hamburger.jpg"

const Articlest = styled.article`
  background: url(${Ham}) 100% 100% / 100% 100%;
  width: 100%;
  height: calc(100vw / 2);
  position: relative;
  p {
    font-size: 36px;
    font-family: "Playfair Display";
    letter-spacing: 5px;
    opacity: 0.6;
    padding: 12px 24px;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;
const Article = () => {
  return (
    <Articlest>
      <p>Le Catering</p>
    </Articlest>
  );
};

export default Article;
