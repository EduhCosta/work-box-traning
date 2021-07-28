import styled from 'styled-components';

const Toolbar = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    height: 64px;
    background-color: #F0F0F0;
    padding: 10px 20px;
`;

const AppName = styled.h1`
    display: block;
    color: #333333;
    font-size: 22px;
    font-weight: bold;
`;

export { Toolbar, AppName };
