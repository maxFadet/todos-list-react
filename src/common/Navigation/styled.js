import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
    position: relative;
    padding: 20px;
    text-decoration: ${({ theme }) => theme.styles.removeStyle};
    color: ${({ theme }) => theme.colors.white};
    transition: color 0.3s;

    &.active {
        font-weight: 700;
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 10px;
        width: 0;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.white};
        transition: width 0.3s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }
`;

export const StyledNavList = styled.nav`
    background: ${({ theme }) => theme.colors.teal};
    margin-top: 0;
    list-style: ${({ theme }) => theme.styles.removeStyle};
    display: flex;
    justify-content: center;
`;