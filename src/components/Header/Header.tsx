import React from 'react';
import HeaderStyles from './HeaderStyles';
import mock from '../../mocks.json'

function Header () {
    return (
        <HeaderStyles>
            <h1>{mock.title}</h1>
            <p>{mock.headerInfo}</p>
        </HeaderStyles>
    )
}

export default Header;