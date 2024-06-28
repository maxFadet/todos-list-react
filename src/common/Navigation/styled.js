import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
    padding: 20px;
    text-decoration: ${({ theme }) => theme.styles.removeStyle};
    color: ${({ theme }) => theme.colors.white};
    
    &.active {
        font-weight: 700;
    }
`;

export const StyledNavList = styled.ul`
    background: ${({ theme }) => theme.colors.teal};
    margin-top: 0;
    list-style: ${({ theme }) => theme.styles.removeStyle};
    display: flex;
    justify-content: center;
`;