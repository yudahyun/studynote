import React from 'react';
import styled from "styled-components";

const FakeImageDiv = styled.div`
     background-color: #aaa;
    width: auto;
    padding: 20px;
`
const FakeImage = (props) => {
    console.log(props);
    return (
        <FakeImageDiv  className="fakeimg" style={props}>Image</FakeImageDiv>   
       
    );
};

export default FakeImage;