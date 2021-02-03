import React from 'react';

import styled from 'styled-components';

const Nav = styled.div`
    background-color: red;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
`;

const NavItem = styled.div `
    font-size: 14px;
    font-family: 'Read';
    font-weight: bold;
    color: #FFF;
    padding: 10px;
`

export default function header() {

    return (
        <Nav>
            <NavItem>
                Home
            </NavItem>
            <NavItem>
                Contato
            </NavItem>
            <NavItem>
                Sobre
            </NavItem>
        </Nav>
    );
};