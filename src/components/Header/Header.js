// @flow
import React from 'react';

import { Toolbar, AppName } from './Header.styled';

function Header(): React$Element<"div">{
    return (
        <Toolbar>
            <AppName>Delivery</AppName>
        </Toolbar>
    );
};

export default Header;
