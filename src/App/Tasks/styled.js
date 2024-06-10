import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.spacing.contentPadding};
    align-items: center;
    
    ${({ hidden }) => hidden && css`
        display: none;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: ${({ theme }) => theme.spacing.contentPadding} 0;
    }
`;

export const Content = styled.span`
    overflow-wrap: anywhere;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.colors.secondaryText};
    font-size: 20px;
    border: none;
    width: ${({ theme }) => theme.dimensions.buttonWidth};
    height: ${({ theme }) => theme.dimensions.buttonHeight};
    transition: ${({ theme }) => theme.transitions.button};

    &:active {
        transform: ${({ theme }) => theme.transforms.smallButtonActive};
    }

    ${({ toggleDone, theme }) => toggleDone && css`
        background: ${theme.colors.toggleButton};

        &:hover {
            background: ${theme.colors.toggleButtonHover};
        }

        &:active {
            background: ${theme.colors.toggleButtonActive};
        }
    `}

    ${({ remove, theme }) => remove && css`
        background: ${theme.colors.removeButton};

        &:hover {
            background: ${theme.colors.removeButtonHover};
        }

        &:active {
            background: ${theme.colors.removeButtonActive};
        }
    `};
`;
