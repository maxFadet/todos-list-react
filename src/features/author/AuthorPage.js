import Container from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { BlogContainer, BlogContent, BlogImage, BlogParagraph } from "./styled";
import personalPhoto from "./personal-photo.jpg";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Maksim Padrabinkin"
            body={
                <BlogContainer>
                    <BlogImage src={personalPhoto} alt="Maksim Padrabinkin" />
                    <BlogContent>
                        <BlogParagraph>
                            Cześć. Jestem bardzo <strong>wszechstronną osobą</strong>. Prawie nie mam wolnego czasu. Zawsze jestem czymś zajęty. Lubię próbować coś nowego.
                        </BlogParagraph>
                        <BlogParagraph>
                            Obecnie moim głównym celem jest <strong>odniesienie sukcesu w Frontend Development</strong>. Moja codzienna rutyna to nauka programowania, języka angielskiego, workout fitness, joga, medytacja.
                        </BlogParagraph>
                        <BlogParagraph>
                            Kiedy zajmuję się czymś, co nie angażuje mojego pełnego uwagi, <strong>słucham podcastów po angielsku</strong>. Oczywiście kocham muzykę, głównie ciężką, taką jak <em>Death Core, Nu-metal</em> itp.
                        </BlogParagraph>
                        <BlogParagraph>
                            <strong>Potrafię również dobrze gotować</strong> i czasami sprawia mi to przyjemność. Jestem zapalonym zwolennikiem realizacji swoich zaplanowanych codziennych zadań.
                        </BlogParagraph>
                        <BlogParagraph>
                            Moje top aplikacje na telefonie to <em>AnkiApp, Disciplined, Spotify, Lingvo, Balance</em>.
                        </BlogParagraph>
                    </BlogContent>
                </BlogContainer>
            }
        />
    </Container>
);