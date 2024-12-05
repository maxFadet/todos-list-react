import styled from "styled-components";

export const BlogContainer = styled.div`
    font-family: ${({ theme }) => theme.blog.fontFamily};
    line-height: ${({ theme }) => theme.blog.lineHeight};
    margin: auto;
    width: 100%;
    padding: 40px;
`;

export const BlogImage = styled.img`
    float: left;
    object-fit: cover;
    width: ${({ theme }) => theme.blog.imageWidth};
    height: ${({ theme }) => theme.blog.imageHeight};
    border-radius: ${({ theme }) => theme.blog.imageBorderRadius};
    margin: ${({ theme }) => theme.blog.imageMargin};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 220px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        height: 150px;
    }
`;

export const BlogContent = styled.div`
    max-width: ${({ theme }) => theme.blog.contentMaxWidth};
`;

export const BlogParagraph = styled.p`
    font-size: ${({ theme }) => theme.blog.paragraphFontSize};
    margin-bottom: ${({ theme }) => theme.blog.paragraphMarginBottom};

    &:first-child {
        margin-top: 0;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;