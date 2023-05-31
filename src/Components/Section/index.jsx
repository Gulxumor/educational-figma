import { section } from "../../utils/mock";
import { Container, Hr, Image, Wrapper } from "./style";

export const Section = () => {
  return (
    <Container>
      <Container.Title>Who is Kurtis for?</Container.Title>
      <Hr />

      <Wrapper>
        {section.map(({ id, img, text, desc }) => (
          <div key={id}>
            <Wrapper.Div>
              <Image src={img} />
              <Container.Text>{text}</Container.Text>
              <Container.Description>{desc}</Container.Description>
              <Container.Anchor>Learn More</Container.Anchor>
            </Wrapper.Div>
          </div>
        ))}
      </Wrapper>
      <Wrapper>
        <Container.Button>Sign Up Now</Container.Button>
      </Wrapper>
    </Container>
  );
};

export default Section;
