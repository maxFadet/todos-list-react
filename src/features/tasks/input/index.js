import styled from "styled-components";

export default styled.input`
    padding: ${({ theme }) => theme.spacing.contentPadding};
    border: 2px solid ${({ theme }) => theme.colors.grey};
`;