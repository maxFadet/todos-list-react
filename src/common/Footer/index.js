import { Content, Link, SocialIcons, SocialMediaLink, Wrapper, Text } from "./styled";
import { resources } from "./recourses";

export const Footer = () => {
    return (
        <Wrapper>
            <Content>
                <Text>
                    © 2024 Created by
                    <Link
                        href="https://github.com/maxFadet?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="My GitHub page"
                    > maxFadet
                    </Link>
                </Text>
                <SocialIcons>
                    {resources.socialIcons.map((social, index) => (
                        <SocialMediaLink
                            key={index}
                            href={social.url}
                            target="_blank"
                            title={social.name}
                        >
                            <social.icon />
                        </SocialMediaLink>
                    ))}
                </SocialIcons>
            </Content>
        </Wrapper>
    );
};