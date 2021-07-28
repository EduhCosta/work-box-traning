// @flow
import React from 'react';
import { GlobalStyle } from './App.styles';

import Routes from './../Routes';

function App(): React$Element<"div"> {
    return (
        <div>
            <GlobalStyle />
            <Routes />
        </div>
    );
};

export default App;
