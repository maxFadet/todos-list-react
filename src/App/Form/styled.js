import styled from "styled-components";

export const Frame = styled.form`
    display: grid;
    grid-template-columns: 1fr 150px;
    grid-gap: 20px;

    @media (max-width:767px) {
        grid-template-columns: 1fr;
    }
`;

export const Type = styled.input`
    padding: 10px;
    border: 2px solid #eeeeee;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: hsl(180, 100%, 25%);
    color: white;
    border: none;
    transition: 0.4s;

    &:hover {
        transform: scale(1.1);
        background: hsl(180, 100%, 30%);
    }

    &:active {
        transform: scale(0.98);
        transition: 0.2s ease;
        background: hsl(180, 100%, 35%);
    }
`;