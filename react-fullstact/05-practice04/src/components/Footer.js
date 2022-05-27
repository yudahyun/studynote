import React from 'react';
import styled from "styled-components";

const FooterSt = styled.footer`
    padding: 20px;
    text-align: center;
    background: #ddd;
`;

const Footer = () => {
    return (
        <FooterSt className="footer">
            <h2>Footer</h2>
        </FooterSt>
    );
};

export default Footer;