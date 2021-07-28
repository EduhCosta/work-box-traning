// @flow
import React from 'react';

import type { Size } from './../../../../context/Register/RegisterContext';

import CounterToggle from '../../../../components/CounterToggle';

type DetailsSelectorProps = {
    id: number,
    onSelectSize: (ev: SyntheticInputEvent<any>) => void,
    valueSize: Size,
    flavorQuantity: number,
    onChangeFlavorCounter: (idx: number, isUp: bool) => void
};

function DetailsSelector({
    id, onSelectSize, valueSize, flavorQuantity, onChangeFlavorCounter
}: DetailsSelectorProps): React$Element<"div"> {
    return (
        <div id={id}>
            <div>
                <label htmlFor={'tasty_' + id}>Qual o tamanho da pizza [{id}]?</label>
                <select id={'tasty_' + id} onChange={onSelectSize} value={valueSize} name={'tasty_' + id}>
                    <option value="broto">Broto</option>
                    <option value="media">Média</option>
                    <option value="grande">Grande</option>
                </select>
            </div>
            {valueSize === 'grande' && (
                <div>
                    <label htmlFor="quantity">Quantos sabores?</label>
                    <CounterToggle
                        onSub={() => onChangeFlavorCounter(id, false)}
                        value={flavorQuantity}
                        onAdd={() => onChangeFlavorCounter(id, true)}
                    />
                </div>
            )}
        </div>
    );
}

export default DetailsSelector;
