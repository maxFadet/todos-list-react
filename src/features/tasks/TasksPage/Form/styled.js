import styled from "styled-components";

export const Frame = styled.form`
    display: grid;
    grid-template-columns: 1fr 150px;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    transition: ${({ theme }) => theme.transitions.button};
    cursor: ${({ theme }) => theme.cursor.cursorPointer};

    &:hover {
        transform: ${({ theme }) => theme.transforms.largeButtonHover};
        filter: brightness(120%);
    }

    &:active {
        transform: ${({ theme }) => theme.transforms.largeButtonActive};
        filter: brightness(70%);
    }
`;
