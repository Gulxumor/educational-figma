import React from "react";
import { Button } from "../Navbar/NavbarStyle";
import image from "../../assets/images/mirodle.png"
import app from "../../assets/images/app-store.png";
import {
    Add,
  App,
  Container,
  Google,
  Image,
  Text,
  Title,
  Wrapper,
} from "./HeaderStyle";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <Title>
            Make learning fun!
          </Title>
          <Text>
            Any subject, in any language, on any device, for all ages!
          </Text>
          <Button w>Sign Up for Free</Button>
          <Add>
            Or download the app:
          </Add>
          <Wrapper>
            <App src={app} alt="app-store" />
            <Google />
          </Wrapper>
        </Wrapper>
        <Wrapper df>
          <Image src={image} alt="Big-img" />
        </Wrapper>
      </Container>
    );
  }
}

export default Header;
