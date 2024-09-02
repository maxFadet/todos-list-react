import { StyledNavLink, StyledNavList } from "./styled";
import { toAuthor, toTasks } from "../routes";

export const Navigation = () => {
    return (
        <StyledNavList>
            <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
            <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
        </StyledNavList>
    );
};