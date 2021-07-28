import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    position: relative;
    padding: 4px 8px;
`;

const Button = styled.button`
    border: none;
    background-color: ${({ isPositive }) => isPositive ? 'green' : 'red'};
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 3px;
    font-size: 18px;
`;

const Label = styled.p`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    flex-grow: 1;
`;

export { Container, Button, Label };
