// @flow
import React, { useContext } from 'react';
import RegisterContext from './RegisterContext';
import type { RegisterRegistry } from './RegisterContext';

function useRegister(): RegisterRegistry {
    const context: RegisterRegistry = useContext(RegisterContext);
    return context;
}

export default useRegister;
