import React from "react";
// import Slider from "react-slick";
import {
  Anchor,
  Black,
  Blue,
  Button,
  Card,
  Card1,
  Code,
  Container,
  Hr,
  Sarlavha,
  Text,
  Title,
  Wrapper,
} from "./MainStyle";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    // };
    return (
      <Container>
        <Title>Amazing things are happening</Title>
        <Hr />
        <Wrapper>
          <Card1>
            <Blue />
            <Sarlavha>Kurtis Classroom</Sarlavha>
            <Text>The next generation of corporate learning.</Text>
            <Anchor>Learn More</Anchor>
          </Card1>

          <Card>
            <Black />
            <Sarlavha>Kurtis Classroom</Sarlavha>
            <Text>The next generation of corporate learning.</Text>
            <Anchor>Learn More</Anchor>
          </Card>

          <Card>
            <Button>New</Button>
            <Sarlavha h>Premium+ for schools</Sarlavha>
            <Text w>
              Create and teach interactive lessons students will love!
            </Text>
            <Anchor a>Learn More</Anchor>
          </Card>
        </Wrapper>

        <Code>Do you have a game code?</Code>
        <Code m >Let’s play for a while!</Code>
      </Container>
    );
  }
}

export default Main;
