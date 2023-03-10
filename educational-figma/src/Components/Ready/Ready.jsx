import React from "react";
import { Container, Div, Hr, Image, Main, Span, Text, Title, Wrapper } from "./ReadyStyle";
import image from "../../assets/images/ugly.png";
import { Button } from "../Navbar/NavbarStyle";

class Ready extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <Div>
            <Hr />
            <Text>More than 50% of US teachers use Kurtis</Text>
          </Div>

          <Div>
            <Hr c="#3CC5FF" />
            <Text>Players in more than 200 countries</Text>
          </Div>

          <Div>
            <Hr c="#FF3B53" />
            <Text>Over 30 million public games available</Text>
          </Div>

          <Div>
            <Hr c="#FFC43B" />
            <Text>97% of the Fortune 500 use Kurtis</Text>
          </Div>
        </Wrapper>
        <Main>
          <Image src={image} alt="ugly-image" />
          <Span>
            <Title>Ready for make learning fun! </Title>
            <Button w>Sign Up for Free</Button>
          </Span>
        </Main>
      </Container>
    );
  }
}
export default Ready;
