import styled from 'styled-components';

export const Input = styled.input`
    padding: .60rem;
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;
    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`;
export const Button = styled.button`
    height: 2rem;
    border: 1p solid #000;
    background: #000;
    color: white;
    border-radius: 0 .25rem .25rem 0;
`;

export const Container = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ErroMsg = styled.span`
    display: block;
    font-size: 1.2rem;
    font-weight: 900px;
    color: red;

`;
export const HomeContainer = styled.div`
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`;