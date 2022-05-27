import React from 'react';
import styled from "styled-components";

const HeaderDiv= styled.header`
    .jumbotron {
        padding: 80px;
        text-align: center;
        background: #1abc9c;
        color: white;
                &h1 {
            font-size: 40px;
        }
    }

`;

const Header = () => {
    return (
        <HeaderDiv>
            <div className="jumbotron">
                <h1>My Website</h1>
                <p>A <b>responsive</b> website created by me.</p>
            </div>
        </HeaderDiv>

    );
};

export default Header;