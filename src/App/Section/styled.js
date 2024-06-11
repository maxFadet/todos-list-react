import styled from "styled-components";

export const Container = styled.section`
    background-color: ${({ theme }) => theme.colors.white};
    margin-bottom: 10px;
    filter: drop-shadow(0 0 7px #dddddd)
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 0 ${({ theme }) => theme.spacing.sectionPadding};
    margin: 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.grey};

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
