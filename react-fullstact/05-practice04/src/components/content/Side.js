import React from "react";
//props 연습하려고 작성해 넣었습니다....
import FakeImage from "./FakeImage";
import styled from "styled-components";

const SideDiv = styled.div`
    width: 360px;
    flex: none;
    border-left: 1px solid #d5d5d5;
    border-right: 1px solid #d5d5d5;
      .container {
      padding: 20px;
  }
`;

const Side = () => {
  return (
    <SideDiv>
      <div className="container">
        <h2>About Me</h2>
        <h5>Photo of me:</h5>
        {/* <div className="fakeimg" style={{height: '200px'}}>Image</div> */}
        <FakeImage height="200px" backgroundColor="red" />
        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
        <h3>More Text</h3>
        <p>Lorem ipsum dolor sit ame.</p>

        {/* <div className="fakeimg" style={{height: '60px'}}>Image</div>
        <div className="fakeimg" style={{height: '60px'}}>Image</div>
        <div className="fakeimg" style={{height: '60px'}}>Image</div>
         */}

        <FakeImage height="60px" />
        <br />
        <FakeImage height="60px" />
        <br />
        <FakeImage height="60px" />
      </div>
    </SideDiv>
  );
};

export default Side;
