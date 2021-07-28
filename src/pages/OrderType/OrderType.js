// @flow
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import type { RegisterRegistry, Size } from './../../context/Register/RegisterContext';
import useRegister from '../../context/Register/useRegister';

// Default size of pizza
const DEFAULT_SIZE: Size = 'broto';
// Default quantity of flavors of pizza
const DEFAULT_FLAVOR_QUANTITY: number = 1;

function OrderType(): React$Element<"div">{
    const { push } = useHistory();
    const {
        quantity,
        setQuantity,
        flavorQuantity,
        setFlavorQuantity,
        sizes,
        setSizes
    }: RegisterRegistry = useRegister();

    const onQuantityChange = (isUp: boolean): void => {
        setQuantity(isUp ? quantity + 1 : quantity - 1);
        if (isUp) {
            updateSizeValue(quantity, DEFAULT_SIZE);
            updateFlavorValue(quantity, DEFAULT_FLAVOR_QUANTITY);
        }
    }

    const onFlavorQuantityChange = (index: number, isUp: boolean): void => {
        const value = isUp ? flavorQuantity[index] + 1 : flavorQuantity[index] - 1;
        updateFlavorValue(index, value);
    }

    const onChangeSizeSelector = (ev: SyntheticInputEvent<any>, index: number): void => {
        updateSizeValue(index, (ev.target.value: any));
    }

    const updateFlavorValue = (index: number, value: number): void => {
        const cloneFlavors: Array<number> = [...flavorQuantity];
        cloneFlavors[index] = value;
        setFlavorQuantity(cloneFlavors);
    }

    const updateSizeValue = (index: number, value: Size): void => {
        const cloneSizes: Array<Size> = [...sizes];
        cloneSizes[index] = value;
        setSizes(cloneSizes);
    }

    const renderSizesAccordingQuantity = (): Array<React$Element<"div">> => {
        const sizesSelectors: Array<React$Element<any>> =
            new Array(quantity).fill().map((it: any, idx: number) => (
                <div key={idx}>
                    <div>
                        <label htmlFor={'tasty' + idx}>Qual o tamanho da pizza [{idx}]?</label>
                        <select
                            id={'tasty' + idx}
                            onChange={(ev) => onChangeSizeSelector(ev, idx)}
                            value={sizes[idx]}
                            name="tasty"
                        >
                            <option value="broto">Broto</option>
                            <option value="media">Média</option>
                            <option value="grande">Grande</option>
                        </select>
                    </div>
                    {sizes[idx] === 'grande' && (
                        <div>
                            <label htmlFor="quantity">Quantos sabores?</label>
                            <button type="button" onClick={() => onFlavorQuantityChange(idx, false)}>-</button>
                            <p>{flavorQuantity[idx]}</p>
                            <button type="button" onClick={() => onFlavorQuantityChange(idx, true)}>+</button>
                        </div>
                    )}
                </div>
            ));

        return sizesSelectors;
    }

    const onContinue = (ev: Event): void => {
        ev.preventDefault();
        push('/flavor');
    }

    return (
        <div>
            <p>Sobre seu pedido:</p>
            <form onSubmit={onContinue}>
                <label htmlFor="quantity">Quantas pizzas deseja?</label>
                <button type="button" onClick={() => onQuantityChange(false)}>-</button>
                <p>{quantity}</p>
                <button type="button" onClick={() => onQuantityChange(true)}>+</button>

                {renderSizesAccordingQuantity()}

                <button type="submit">Próximo passo</button>
            </form>
        </div>
    );
};

export default OrderType;
