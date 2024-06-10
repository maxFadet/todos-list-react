import styled from "styled-components";

export const Container = styled.section`
    background-color: ${({ theme }) => theme.colors.background};
    margin-bottom: 10px;
    box-shadow: 0 0 7px ${({ theme }) => theme.colors.shadow};
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 0 ${({ theme }) => theme.spacing.sectionPadding};
    margin: 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        text-align: center;
        grid-gap: 0;
    }
`;

export const Body = styled.div`
    padding: ${({ theme }) => theme.spacing.sectionPadding};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: ${({ theme }) => theme.spacing.sectionPaddingMobile};
    }
`;
