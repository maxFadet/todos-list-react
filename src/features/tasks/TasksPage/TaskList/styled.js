import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: ${({ theme }) => theme.styles.removeStyle};
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
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
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    border: none;
    width: ${({ theme }) => theme.dimensions.buttonWidth};
    height: ${({ theme }) => theme.dimensions.buttonHeight};
    transition: ${({ theme }) => theme.transitions.button};
    cursor: ${({ theme }) => theme.cursor.cursorPointer};

    &:active {
        transform: ${({ theme }) => theme.transforms.smallButtonActive};
    }

    ${({ toggleDone, theme }) => toggleDone && css`
        background: ${theme.colors.forestGreen};

        &:hover {
            filter: brightness(120%);
        }

        &:active {
            filter: brightness(70%);
        }
    `}

    ${({ remove, theme }) => remove && css`
        background: ${theme.colors.alizarinCrimson};

        &:hover {
            filter: brightness(120%);;
        }

        &:active {
            filter: brightness(70%);
        }
    `};
`;
