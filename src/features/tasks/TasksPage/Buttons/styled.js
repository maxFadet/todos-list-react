import styled, { css } from "styled-components";

export const Panel = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.teal};
    transition: ${({ theme }) => theme.transitions.button};
    cursor: ${({ theme }) => theme.cursor.cursorPointer};

    &:hover {
        filter: ${({ theme }) => theme.filters.buttonHover};
    }

    &:active {
        transform: ${({ theme }) => theme.transforms.averageButtonActive};
        filter: ${({ theme }) => theme.filters.buttonActive};
    }

    ${({ disabled, theme }) => disabled && css`
    color: ${theme.colors.darkGrey};
    cursor: ${theme.cursor.cursorNotAllowed};
    
    &:hover {
        filter: none;
    }

    &:active {
        transform: none;
        filter: none;
    }
`};
`;