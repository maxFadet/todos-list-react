import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
   margin: 100px 0 0;
   background: ${({ theme }) => theme.colors.teal};
   text-align: center;

   @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-top: 65px;
  }

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      margin-top: 50px;
  }
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

const smoothTwist = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SocialMediaLink = styled.a`
  color: white;
  display: inline-block;
  transition: color 0.3s ease;

  svg {
    width: 32px;
    height: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 24px;
      height: 24px;
    }
  }

  &:hover {
    animation: ${smoothTwist} 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;