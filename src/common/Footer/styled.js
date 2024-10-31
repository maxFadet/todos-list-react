import styled from "styled-components";

export const Wrapper = styled.div`
   margin: 0;
   background: ${({ theme }) => theme.colors.teal};
   text-align: center;
`;

export const Content = styled.p`
   padding: 10px;
   color: ${({ theme }) => theme.colors.white};
`;