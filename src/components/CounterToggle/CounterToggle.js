// @flow
import React from 'react';

import { Container, Button, Label } from './CounterToggle.styled';

type CounterToggleProps = {
    onAdd: () => void,
    onSub: () => void,
    value: number
}

function CounterToggle({ onAdd, onSub, value }: CounterToggleProps): React$Element<"div"> {
    return (
        <Container>
            <Button type="button" aria-label="sub button" onClick={onSub}>-</Button>
            <Label>{value}</Label>
            <Button type="button" aria-label="add button" isPositive onClick={onAdd}>+</Button>
        </Container>
    )
}

export default CounterToggle;
