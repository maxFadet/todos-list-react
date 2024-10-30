import styled from "styled-components";

export const Wrapper = styled.div`
   margin: 0;
   padding: 30px;
   background: ${({ theme }) => theme.colors.teal};
   text-align: center;
`;

export const Content = styled.p`
   padding: 20px;
   color: ${({ theme }) => theme.colors.white};
`;