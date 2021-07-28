// @flow
import React from 'react';
import { useHistory } from 'react-router-dom';

import { Toolbar, AppName } from './Home.styled';

function Home(): React$Element<"div"> {
    const history = useHistory();

    const goToFirstStep = () => {
        history.push('/type');
    }

    return (
        <div>
            <h2>Bem vindo ao nosso restaurante, que tal pedir uma pizza?</h2>
            <button type="button" onClick={goToFirstStep}>Iniciar Pedido</button>
        </div>
    );
};

export default Home;
