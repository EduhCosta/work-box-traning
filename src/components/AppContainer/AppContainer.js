// @flow
import React from 'react';

import { Body } from './AppContainer.styled';

type Props = { children: React$Element<any> }

function AppContainer({ children }: Props): React$Element<any> {
    return <Body>{children}</Body>
}

export default AppContainer;
