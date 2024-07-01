import styled from "styled-components";

export const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ${({ theme }) => theme.blog.containerMargin};
    font-family: ${({ theme }) => theme.blog.fontFamily};
    line-height: ${({ theme }) => theme.blog.lineHeight};
`;

export const BlogImage = styled.img`
    object-fit: cover;
    width: ${({ theme }) => theme.blog.imageWidth};
    height: ${({ theme }) => theme.blog.imageHeight};
    border-radius: ${({ theme }) => theme.blog.imageBorderRadius};
    margin-bottom: ${({ theme }) => theme.blog.imageMarginBottom};
`;

export const BlogContent = styled.div`
    max-width: ${({ theme }) => theme.blog.contentMaxWidth};
    padding: ${({ theme }) => theme.blog.contentPadding};
    background-color: ${({ theme }) => theme.blog.contentBackgroundColor};
    border-radius: ${({ theme }) => theme.blog.contentBorderRadius};
    box-shadow: ${({ theme }) => theme.blog.contentBoxShadow};
`;

export const BlogParagraph = styled.p`
    font-size: ${({ theme }) => theme.blog.paragraphFontSize};
    color: ${({ theme }) => theme.blog.paragraphColor};
    margin-bottom: ${({ theme }) => theme.blog.paragraphMarginBottom};
`;
