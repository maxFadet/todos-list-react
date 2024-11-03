import { Content, Link, Wrapper } from "./styled";

export const Footer = () => {
    return (
        <Wrapper>
            <Content>
                © 2024 Created by
                <Link
                    href="https://github.com/maxFadet?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="My GitHub page"
                > maxFadet
                </Link>
            </Content>
        </Wrapper>
    );
};