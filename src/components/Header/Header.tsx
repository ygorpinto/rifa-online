import React from 'react';
import HeaderStyles from './HeaderStyles';
import mock from '../../mocks.json'

function Header () {
    return (
        <HeaderStyles>
            {mock.title}
        </HeaderStyles>
    )
}

export default Header;