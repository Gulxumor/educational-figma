import React from "react";
import {
  Anchor,
  Board,
  Book,
  Button,
  Container,
  Description,
  Div,
  Hr,
  Phone,
  Print,
  Text,
  Title,
  Wrapper,
} from "./SectionStyle";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Title>Who is Kurtis for?</Title>
        <Hr />
        <Wrapper>
          <Div>
            <Book />
            <Text>At School</Text>
            <Description>
              Engaging group and distance learning for teachers and students.
            </Description>
            <Anchor>Learn more</Anchor>
          </Div>
          <Div>
            <Board />
            <Text>At Work</Text>
            <Description>
              For training, e-learning, interactive presentations and more.
            </Description>
            <Anchor>Learn more</Anchor>
          </Div>
          <Div>
            <Print />
            <Text>At Home</Text>
            <Description>
              Apps and games for family fun or home study.
            </Description>
            <Anchor>Learn more</Anchor>
          </Div>
          <Div>
            <Phone />
            <Text>Learning apps</Text>
            <Description>
              Engage kids with the Kahoot! family of learning apps{" "}
            </Description>
            <Anchor>Learn more</Anchor>
          </Div>
        </Wrapper>
        <Wrapper>
                  <Button>Sign Up Now</Button>
          </Wrapper>
      </Container>
    );
  }
}

export default Section;
