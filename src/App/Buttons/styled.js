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
    color: ${({ theme }) => theme.colors.accent};
    transition: ${({ theme }) => theme.transitions.button};
    cursor: ${({ theme }) => theme.cursor.cursorPointer};

    &:hover {
        color: ${({ theme }) => theme.colors.accentHover};
    }

    &:active {
        transform: ${({ theme }) => theme.transforms.averageButtonActive};
        color: ${({ theme }) => theme.colors.accentActive};
    }

    ${({ disabled }) => disabled && css`
        &:disabled {
            color: ${({ theme }) => theme.colors.disabledText};
            cursor: ${({ theme }) => theme.cursor.cursorNotAllowed};
        }
    `};
`;

export const SecondaryButton = styled(Button)`
    color: ${({ theme }) => theme.colors.removeButton};

    &:hover {
        color: ${({ theme }) => theme.colors.removeButtonHover};
    }

    &:active {
        transform: scale(0.98);
        transition: ${({ theme }) => theme.transitions.active};
        color: ${({ theme }) => theme.colors.removeButtonActive};
    }
`;
