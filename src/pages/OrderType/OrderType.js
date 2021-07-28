// @flow
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import type { RegisterRegistry, Size } from './../../context/Register/RegisterContext';
import useRegister from '../../context/Register/useRegister';

// Default size of pizza
const DEFAULT_SIZE: Size = 'broto';

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
            updateSizeWithValue(quantity, DEFAULT_SIZE);
        }
    }

    const onFlavorQuantityChange = (isUp: boolean): void => {
        setFlavorQuantity(isUp ? flavorQuantity + 1 : flavorQuantity - 1);
    }

    const onChangeSizeSelector = (ev: SyntheticInputEvent<any>, index: number): void => {
        updateSizeWithValue(index, (ev.target.value: any));
    }

    const updateSizeWithValue = (index: number, value: Size): void => {
        const cloneSizes: Array<Size> = [...sizes];
        cloneSizes[index] = value;
        setSizes(cloneSizes);
    }

    const renderSizesAccordingQuantity = (): Array<React$Element<"div">> => {
        const sizesSelectors: Array<React$Element<any>> =
            new Array(quantity).fill().map((it: any, idx: number) => (
                <div key={idx}>
                    <label htmlFor={'tasty' + idx}>Qual o tamanho da pizza [{idx}]?</label>
                    <select
                        id={'tasty' + idx}
                        onChange={(ev) => onChangeSizeSelector(ev, idx)}
                        name="tasty"
                    >
                        <option value="broto">Broto</option>
                        <option value="media">Média</option>
                        <option value="grande">Grande</option>
                    </select>
                </div>
            ));

        return sizesSelectors;
    }

    const onContinue = (ev: Event): void => {
        ev.preventDefault();
        push('/flavor');
    }

    const isShowFlavor: boolean = sizes.length > 0 && !sizes.some(it => it === 'media' || it === 'broto');

    return (
        <div>
            <p>Sobre seu pedido:</p>
            <form onSubmit={onContinue}>
                <label htmlFor="quantity">Quantas pizzas deseja?</label>
                <button type="button" onClick={() => onQuantityChange(false)}>-</button>
                <p>{quantity}</p>
                <button type="button" onClick={() => onQuantityChange(true)}>+</button>

                {renderSizesAccordingQuantity()}

                {isShowFlavor && (
                    <div>
                        <label htmlFor="quantity">Quantos sabores?</label>
                        <button type="button" onClick={() => onFlavorQuantityChange(false)}>-</button>
                        <p>{flavorQuantity}</p>
                        <button type="button" onClick={() => onFlavorQuantityChange(true)}>+</button>
                    </div>
                )}

                <button type="submit">Próximo passo</button>
            </form>
        </div>
    );
};

export default OrderType;
