import { Container, Header, Body } from "./styled"

const Section = ({ title, body, extraHeadercontent }) => (
    <Container>
        <Header>
            <h2>{title}</h2>
            {extraHeadercontent}
        </Header>
        <Body>
            {body}
        </Body>
    </Container>
);

export default Section;