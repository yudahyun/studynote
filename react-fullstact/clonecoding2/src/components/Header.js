import React from "react";
import styled from "styled-components";

const Header = () => {
  const HeaderSt = styled.header`
    max-width: 100%;
    margin: 0 auto;
    img {
      margin: 0 auto;
      display: block;
      text-align: center;
    }
    .black-bg {
    opacity: 0.75;
    background: #000;
}

    .main-txt {
      position: absolute;
      left: 0;
      right: 0;
      text-align: center;
      bottom: 50%;
      transform: translate(0, 50%);
      font-size: 36px;
      color: #fff !important;
    }
  `;
  return (
    <HeaderSt>
      <img src="./img/architect.jpg" alt="홈이미지" />
      <h1 className=" main-txt">
        <span
          className="black-bg normal-padding letter-spacing-4
                 text-center
                "
        >
          <b>BR</b>
        </span>
        <span className="letter-spacing-4">Architects</span>
      </h1>
    </HeaderSt>
  );
};

export default Header;
