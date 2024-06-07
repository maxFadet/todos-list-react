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
    border-bottom: 2px solid #eeeeee;
    padding: 10px;
    align-items: center;
    word-wrap: break-word;

    ${({ hidden }) => hidden && css`
        display: none;
    `}

    @media (max-width: 767px) {
        padding: 10px 0;
    }
`;

export const Content = styled.span`
    overflow-wrap: anywhere;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    color: #fff;
    font-size: 20px;
    border: none;
    width: 30px;
    height: 30px;
    padding: 0;

    &:active {
        transform: scale(0.93);
        transition: 0.2s ease;
    }

    ${({ toggleDone }) => toggleDone && css`
        background: hsl(122, 65%, 29%);

        &:hover {
            background: hsl(122, 65%, 35%);
            transition: 0.2s;
        }

        &:active {
            background: hsl(122, 65%, 40%);
        }
    `}

    ${({ remove }) => remove && css`
        background: hsl(355, 84%, 55%);

        &:hover {
            background: hsl(355, 84%, 60%);
            transition: 0.2s; 
        }

        &:active {
            background: hsl(355, 84%, 65%);
        }
    `};
`;
