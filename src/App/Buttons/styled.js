import styled, { css } from "styled-components";

export const Panel = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        padding-bottom: 20px;
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
        &:disabled {
            color: ${theme.colors.darkGrey};
            cursor: ${theme.cursor.cursorNotAllowed};
        }

        &:hover {
            filter: ${theme.filters.buttonUnavailble};
        }

        &:active {
            transform: none;
            filter: ${theme.filters.buttonUnavailble};
        }
    
    `};
`;

export const SecondaryButton = styled(Button)`
    color: ${({ theme }) => theme.colors.alizarinCrimson};

    &:hover {
        filter: ${({ theme }) => theme.filters.buttonHover};
    }

    &:active {
        transform: scale(0.98);
        transition: ${({ theme }) => theme.transitions.active};
        filter: ${({ theme }) => theme.filters.buttonActive};
    }
`;
