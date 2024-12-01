import styled from "styled-components";

export const Wrapper = styled.div`
   margin: 100px 0 0;
   background: ${({ theme }) => theme.colors.teal};
   text-align: center;
`;

export const Content = styled.p`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const Text = styled.div`
   color: ${({ theme }) => theme.colors.white};

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: smaller;
  }
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 24px;
    gap: 18px;
  }
`;

export const SocialMediaLink = styled.a`
  color: white;
  transition: color 0.3s ease;

  &:hover {
    color: blue;
  }
`;