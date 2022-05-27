import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";
const MenuLinkContainer= styled(NavLink)`
    font-size:20px;
    cursor:pointer;
    text-decoration:none;
    color:#222;
    &:hover{
        color:#22b8cf;
    }
    &:hover{
        content: "|";
        display:inline-block;
        padding: 0 7px;
        color:#ccc;
    }
    &:last-child{
        &:after{
            color:#fff;
        }
    }
    &.active{
        text-decoration:none;
        color:#22b8cf;
        &:after{
            border-bottom: 4px solid #fff !important;
        }
    }
`
const MenuLink = ({to,chideren}) => <MenuLinkContainer to={to}>{chideren}</MenuLinkContainer>;

export default React.memo(MenuLink);