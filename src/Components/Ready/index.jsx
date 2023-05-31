import { Container, Image, Main, Span, Wrapper } from "./style";
import image from "../../assets/images/ugly.png";
import { Button } from "../Navbar/style";

const Ready = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper.Div>
          <Wrapper.Hr />
          <Wrapper.Text>More than 50% of US teachers use Kurtis</Wrapper.Text>
        </Wrapper.Div>

        <Wrapper.Div>
          <Wrapper.Hr c="#3CC5FF" />
          <Wrapper.Text>Players in more than 200 countries</Wrapper.Text>
        </Wrapper.Div>

        <Wrapper.Div>
          <Wrapper.Hr c="#FF3B53" />
          <Wrapper.Text>Over 30 million public games available</Wrapper.Text>
        </Wrapper.Div>

        <Wrapper.Div>
          <Wrapper.Hr c="#FFC43B" />
          <Wrapper.Text>97% of the Fortune 500 use Kurtis</Wrapper.Text>
        </Wrapper.Div>
      </Wrapper>
      <Main>
        <Image src={image} alt="ugly-image" />
        <Span>
          <Wrapper.Title>Ready for make learning fun! </Wrapper.Title>
          <Button w>Sign Up for Free</Button>
        </Span>
      </Main>
    </Container>
  );
};
export default Ready;
