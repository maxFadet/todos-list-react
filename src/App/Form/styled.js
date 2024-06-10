import styled from "styled-components";

export const Frame = styled.form`
    display: grid;
    grid-template-columns: 1fr 150px;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`;

export const Type = styled.input`
    padding: ${({ theme }) => theme.spacing.contentPadding};
    border: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const Button = styled.button`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.secondaryText};
    border: none;
    transition: ${({ theme }) => theme.transitions.button};

    &:hover {
        transform: ${({ theme }) => theme.transforms.largeButtonHover};
        background: ${({ theme }) => theme.colors.accentHover};
    }

    &:active {
        transform: ${({ theme }) => theme.transforms.largeButtonActive};
        background: ${({ theme }) => theme.colors.accentActive};
    }
`;
