import Slider from "react-slick";
import { Container } from "./style";
import { carousel } from "../../utils/carousel";

const Customers = () => {
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
      <Container.Title t>Our best customers</Container.Title>
      <Container.Hr h />
      <Slider {...settings}>
        {carousel.map(({ id, image, title, girl, text, desc }) => (
          <Container.Outer key={id}>
            <Container.Inner>
              <Container.Wrapper>
                <Container.Div>{desc}</Container.Div>
                <Container.Image src={girl} alt="girl-image" />
              </Container.Wrapper>
              <Container.Hr />
              <Container.Wrapper>
                <Container.Title>{title}</Container.Title>
                <Container.Text>{text}</Container.Text>
                <Container.Image ml src={image} alt="logo" />
              </Container.Wrapper>
            </Container.Inner>
          </Container.Outer>
        ))}
      </Slider>
    </Container>
  );
};

export default Customers;
