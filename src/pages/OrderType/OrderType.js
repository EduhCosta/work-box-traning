// @flow
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import type { RegisterRegistry, Size } from './../../context/Register/RegisterContext';
import useRegister from '../../context/Register/useRegister';

import CounterToggle from '../../components/CounterToggle';
import DetailsSelector from './components/DetailsSelector/DetailsSelector';

import { CountPizzaBox, SectionName } from './OrderType.styled';

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
                <DetailsSelector
                    key={idx}
                    id={idx}
                    onSelectSize={(ev) => onChangeSizeSelector(ev, idx)}
                    valueSize={sizes[idx]}
                    flavorQuantity={flavorQuantity[idx]}
                    onChangeFlavorCounter={onFlavorQuantityChange}
                />
            ));

        return sizesSelectors;
    }

    const onContinue = (ev: Event): void => {
        ev.preventDefault();
        push('/flavor');
    }

    return (
        <div>
            <SectionName>Sobre seu pedido:</SectionName>
            <form onSubmit={onContinue}>
                <CountPizzaBox>
                    <label htmlFor="quantity">Quantas pizzas deseja?</label>
                    <CounterToggle
                        onSub={() => onQuantityChange(false)}
                        value={quantity}
                        onAdd={() => onQuantityChange(true)}
                    />
                </CountPizzaBox>

                {renderSizesAccordingQuantity()}

                <button type="submit">Próximo passo</button>
            </form>
        </div>
    );
};

export default OrderType;
