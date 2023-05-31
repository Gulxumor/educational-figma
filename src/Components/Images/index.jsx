import { Container } from "./style";
import first from "../../assets/images/first.png";
import second from "../../assets/images/second.png";
import third from "../../assets/images/third.png";
import { Hr } from "../Section/style";

const Images = () => {
  return (
    <Container>
      <Container.Span>
        <Container.Still >Still more? </Container.Still>
        <Container.A href="#">Take a look to our features games</Container.A>
      </Container.Span>
      <Container.Title>How does Kurtis work?</Container.Title>
      <Hr m />
      <Container.Outer>
        <Container.Image src={first} />
        <Container.Wrapper>
          <Container.Title>Create</Container.Title>
          <Container.Text>
            It only takes minutes to create a learning game or trivia quiz on
            any topic, in any language.
          </Container.Text>
        </Container.Wrapper>
      </Container.Outer>
      <Container.Outer g>
        <Container.Wrapper>
          <Container.Title>Host or share</Container.Title>
          <Container.Text>
            Host a live game with questions on a big screen or share a game with
            remote players.
          </Container.Text>
        </Container.Wrapper>
        <Container.Image w src={second} />
      </Container.Outer>
      <Container.Outer>
        <Container.Image src={third} />
        <Container.Wrapper>
          <Container.Title>Play</Container.Title>
          <Container.Text>
            PlayGame on! Join a kahoot with a PIN provided by the host and
            answer questions on your device.
          </Container.Text>
        </Container.Wrapper>
      </Container.Outer>
    </Container>
  );
};

export default Images;
