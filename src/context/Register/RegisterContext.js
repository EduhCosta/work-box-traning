// @flow
import React from 'react';

export type Size = "broto" | "media" | "grande";

export type RegisterRegistry = {
    quantity: number,
    setQuantity: ((number => number) | number) => void,
    sizes: Array<Size>,
    setSizes: (((Array<Size>) => Array<Size>) | Array<Size>) => void,
    flavorQuantity: Array<number>,
    setFlavorQuantity: (((Array<number>) => Array<number>) | Array<number>) => void
}

const initialState: RegisterRegistry = {
    quantity: 0,
    setQuantity: () => {},
    sizes: [],
    setSizes: () => {},
    flavorQuantity: [1],
    setFlavorQuantity: () => {}
};

const RegisterContext: React$Context<RegisterRegistry> = React.createContext<RegisterRegistry>(initialState);

export default RegisterContext;
