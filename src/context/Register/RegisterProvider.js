// @flow
import React, { useState, useEffect, useLayoutEffect } from 'react';

import RegisterContext from './RegisterContext';
import type { RegisterRegistry, Size } from './RegisterContext';

import { shouldHaveSizesAccordingOfQuantities } from './BusinessRules';

type RegisterProviderProps = { children: React$Element<any> }

function RegisterProvider({ children }: RegisterProviderProps): React$Element<any> {
    const [quantity, setQuantity] = useState<number>(1);
    const [sizes, setSizes] = useState<Array<Size>>([]);
    const [flavorQuantity, setFlavorQuantity] = useState<number>(1);

    const state: RegisterRegistry = {
        quantity,
        setQuantity,
        sizes,
        setSizes,
        flavorQuantity,
        setFlavorQuantity
    };

    useEffect(() => {
        console.group("Business Rules");
        shouldHaveSizesAccordingOfQuantities({ quantity, sizes });
        console.groupEnd();
    }, [quantity, setQuantity, sizes, setSizes, flavorQuantity, setFlavorQuantity]);

    useLayoutEffect(() => {
        console.log('Change');
    });

    return (
        <RegisterContext.Provider value={state}>
            {children}
        </RegisterContext.Provider>
    );
};

export default RegisterProvider;
