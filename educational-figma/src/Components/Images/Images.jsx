import React from "react";
import {
  A,
  Container,
  Image,
  Outer,
  Span,
  Still,
  Text,
  Title,
  Wrapper,
} from "./ImagesStyle";
import first from "../../assets/images/first.png";
import second from "../../assets/images/second.png";
import third from "../../assets/images/third.png";
import { Hr } from "../Section/SectionStyle";

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Span>
          <Still>Still more? </Still>
          <A>Take a look to our features games</A>
        </Span>
        <Title >How does Kurtis work?</Title>
        <Hr m />
        <Outer>
          <Image src={first} />
          <Wrapper>
            <Title>Create</Title>
            <Text>
              It only takes minutes to create a learning game or trivia quiz on
              any topic, in any language.
            </Text>
          </Wrapper>
        </Outer>
        <Outer g>
          <Wrapper>
            <Title>Host or share</Title>
            <Text>
              Host a live game with questions on a big screen or share a game
              with remote players.
            </Text>
          </Wrapper>
          <Image w src={second} />
        </Outer>
        <Outer>
          <Image src={third} />
          <Wrapper>
            <Title>Play</Title>
            <Text>
              PlayGame on! Join a kahoot with a PIN provided by the host and
              answer questions on your device.
            </Text>
          </Wrapper>
        </Outer>
      </Container>
    );
  }
}
export default Images;
