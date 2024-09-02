import { StyledNavLink, StyledNavList } from "./styled";

export const Navigation = () => {
    return (
        <StyledNavList>
            <StyledNavLink to="/zadania">Zadania</StyledNavLink>
            <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </StyledNavList>
    );
};