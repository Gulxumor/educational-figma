import { Button } from "../Navbar/style";
import image from "../../assets/images/mirodle.png";
import app from "../../assets/images/app-store.png";
import google from "../../assets/icons/google-play.svg";
import { App, Container, Image, Wrapper } from "./style";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Container.Title>Make learning fun!</Container.Title>
        <Container.Text>Any subject, in any language, on any device, for all ages!</Container.Text>
        <Button w>Sign Up for Free</Button>
        <Container.Add>Or download the app:</Container.Add>
        <Wrapper>
          <div style={{ display: "flex", gap: "15px" }}>
            <App src={app} alt="app-store" />
            <App src={google} alt="google" />
          </div>
        </Wrapper>
      </Wrapper>
      <Wrapper df>
        <Image src={image} alt="Big-img" />
      </Wrapper>
    </Container>
  );
};

export default Header;
