import styled, { css } from "styled-components";

export const Panel = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 20px;

@media (max-width:767px) {
        grid-template-columns: 1fr;
        padding-bottom: 20px;
}
`;

export const Button = styled.button`
    border: none;
    background-color: transparent;
    color: teal;
    transition: 0.4s;

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:active {
        transform: scale(0.98);
        transition: 0.2s ease;
        color: hsl(180, 100%, 15%);
    }

    ${({ disabled }) => disabled && css`
        &:disabled {
            color: hsl(0, 0%, 70%);
            cursor: not-allowed;
        }
    `};
`;

export const SecondaryButton = styled(Button)`
    color: hsl(355, 84%, 55%);

    &:hover {
        color: hsl(355, 84%, 65%);
    }

    &:active {
        transform: scale(0.98);
        transition: 0.2s ease;
        color: hsl(355, 84%, 35%);
    }
`;
