// @flow
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function OrderType(): React$Element<"div">{
    const { push } = useHistory();
    const [count, setCount] = useState<number>(1);
    const [countFlavor, setCountFlavor] = useState<number>(1);

    const onModifierCounter = (isUp: boolean): void => {
        setCount(isUp ? count + 1 : count - 1);
    }

    const onModifierCounterFlavor = (isUp: boolean): void => {
        setCountFlavor(isUp ? countFlavor + 1 : countFlavor - 1);
    }

    const onSubmitForm = (ev: Event): void => {
        ev.preventDefault();
        push('/flavor');
    }

    return (
        <div>
            <p>Sobre seu pedido:</p>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="tasty">Qual o tamanho da pizza?</label>
                <select id="tasty" name="cars" id="cars">
                    <option value="broto">Broto</option>
                    <option value="media">Média</option>
                    <option value="grande">Grande</option>
                </select>

                <label htmlFor="quantity">Quantos sabores?</label>
                <button type="button" onClick={() => onModifierCounterFlavor(false)}>-</button>
                <p>{count}</p>
                <button type="button" onClick={() => onModifierCounterFlavor(true)}>+</button>

                <label htmlFor="quantity">Quantas pizzas deseja?</label>
                <button type="button" onClick={() => onModifierCounter(false)}>-</button>
                <p>{count}</p>
                <button type="button" onClick={() => onModifierCounter(true)}>+</button>

                <button type="submit">Próximo passo</button>
            </form>
        </div>
    );
};

export default OrderType;
