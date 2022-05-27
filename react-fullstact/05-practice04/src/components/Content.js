import React from 'react';
import Side from './content/Side';
import Main from "./content/Main";
import styled from "styled-components";

const Contentdiv = styled.section`
  max-width: 1200px;
    margin: auto;
    background-color: #eee;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
`;


const Content = () => {
    return (
        <Contentdiv >
            <Side/>
            <Main/>
        </Contentdiv>
    );
};

export default Content;