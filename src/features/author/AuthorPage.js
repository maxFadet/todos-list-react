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
                            Cześć! Jestem bardzo <strong>wszechstronną osobą</strong>. Prawie nie mam wolnego czasu, ponieważ zawsze jestem czymś zajęty. Uwielbiam próbować nowych rzeczy.
                        </BlogParagraph>
                        <BlogParagraph>
                            Obecnie moim głównym celem jest <strong>odniesienie sukcesu w Frontend Development</strong>. Moja codzienna rutyna obejmuje naukę programowania, języka angielskiego, ćwiczenia fitness, jogę i medytację.
                        </BlogParagraph>
                        <BlogParagraph>
                            Kiedy zajmuję się czymś, co nie wymaga pełnego skupienia, <strong>słucham podcastów po angielsku</strong>. Oczywiście kocham muzykę, zwłaszcza cięższe gatunki, takie jak <em>deathcore, nu-metal</em> itp.
                        </BlogParagraph>
                        <BlogParagraph>
                            <strong>Potrafię również dobrze gotować</strong>, co czasami sprawia mi dużo przyjemności. Jestem zapalonym zwolennikiem realizacji zaplanowanych codziennych zadań.
                        </BlogParagraph>
                        <BlogParagraph>
                            Moje ulubione aplikacje na telefonie to <em>AnkiApp, Disciplined, Spotify, Lingvo, Balance, Blissful</em>.
                        </BlogParagraph>
                    </BlogContent>
                </BlogContainer>
            }
        />
    </Container>
);