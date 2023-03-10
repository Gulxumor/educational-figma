import React from "react";
import girl from "../../assets/images/girl.png";
import norveg from "../../assets/images/norveg.png";
import Slider from "react-slick";
import {
  Container,
  Title,
  Hr,
  Wrapper,
  Div,
  Image,
  Text,
  Outer,
  Inner,
} from "./CustomersStyle";

class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Container>
        <Title t>Our best customers</Title>
        <Hr h />
        <Slider {...settings}>
          <Outer>
            <Inner>
              <Wrapper>
                <Div>I love these games!</Div>
                <Image src={girl} alt="girl-image" />
              </Wrapper>
              <Hr />
              <Wrapper>
                <Title>Martha | Norwegian Air</Title>
                <Text>
                  Recusandae sunt voluptate repellat velit dolorem eos nostrum
                  cupiditate. Labore porro cupiditate reiciendis enim neque.
                  Modi eos autem expedita voluptatibus dignissimos repellat. Sit
                  et aut minus quod vitae. Aut occaecati cupiditate neque dolore
                  amet beatae quasi aliquam.
                </Text>
                <Image ml src={norveg} alt="logo" />
              </Wrapper>
            </Inner>
          </Outer>

          <Outer>
            <Inner>
              <Wrapper>
                <Div>I love these games!</Div>
                <Image src={girl} alt="girl-image" />
              </Wrapper>
              <Hr />
              <Wrapper>
                <Title>Martha | Norwegian Air</Title>
                <Text>
                  Recusandae sunt voluptate repellat velit dolorem eos nostrum
                  cupiditate. Labore porro cupiditate reiciendis enim neque.
                  Modi eos autem expedita voluptatibus dignissimos repellat. Sit
                  et aut minus quod vitae. Aut occaecati cupiditate neque dolore
                  amet beatae quasi aliquam.
                </Text>
                <Image ml src={norveg} alt="logo" />
              </Wrapper>
            </Inner>
          </Outer>
        <Outer>
          <Inner>
            <Wrapper>
              <Div>I love these games!</Div>
              <Image src={girl} alt="girl-image" />
            </Wrapper>
            <Hr />
            <Wrapper>
              <Title>Martha | Norwegian Air</Title>
              <Text>
                Recusandae sunt voluptate repellat velit dolorem eos nostrum
                cupiditate. Labore porro cupiditate reiciendis enim neque. Modi
                eos autem expedita voluptatibus dignissimos repellat. Sit et aut
                minus quod vitae. Aut occaecati cupiditate neque dolore amet
                beatae quasi aliquam.
              </Text>
              <Image ml src={norveg} alt="logo" />
            </Wrapper>
          </Inner>
        </Outer>
        <Outer>
          <Inner>
            <Wrapper>
              <Div>I love these games!</Div>
              <Image src={girl} alt="girl-image" />
            </Wrapper>
            <Hr />
            <Wrapper>
              <Title>Martha | Norwegian Air</Title>
              <Text>
                Recusandae sunt voluptate repellat velit dolorem eos nostrum
                cupiditate. Labore porro cupiditate reiciendis enim neque. Modi
                eos autem expedita voluptatibus dignissimos repellat. Sit et aut
                minus quod vitae. Aut occaecati cupiditate neque dolore amet
                beatae quasi aliquam.
              </Text>
              <Image ml src={norveg} alt="logo" />
            </Wrapper>
          </Inner>
        </Outer>
        <Outer>
          <Inner>
            <Wrapper>
              <Div>I love these games!</Div>
              <Image src={girl} alt="girl-image" />
            </Wrapper>
            <Hr />
            <Wrapper>
              <Title>Martha | Norwegian Air</Title>
              <Text>
                Recusandae sunt voluptate repellat velit dolorem eos nostrum
                cupiditate. Labore porro cupiditate reiciendis enim neque. Modi
                eos autem expedita voluptatibus dignissimos repellat. Sit et aut
                minus quod vitae. Aut occaecati cupiditate neque dolore amet
                beatae quasi aliquam.
              </Text>
              <Image ml src={norveg} alt="logo" />
            </Wrapper>
          </Inner>
        </Outer>
        </Slider>
      </Container>
    );
  }
}

export default Customers;
