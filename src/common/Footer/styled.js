import styled from "styled-components";

export const Wrapper = styled.div`
   margin: 100px 0 0;
   background: ${({ theme }) => theme.colors.teal};
   text-align: center;
`;

export const Content = styled.p`
   padding: 10px;
   color: ${({ theme }) => theme.colors.white};
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
`;