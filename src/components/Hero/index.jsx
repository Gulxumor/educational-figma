import { Container, Wrapper } from "./style";
import { Rate } from "antd";
import avangers from "./../../assets/images/avengers.png";
import spiter from "./../../assets/images/spiter-man.png";
import star_wars from "./../../assets/images/star_wars.png";
import star_wars2 from "./../../assets/images/star_wars2.png";
import uncharted from "./../../assets/images/uncharted.png";
import captian from "./../../assets/images/captian_america.png";
import pause from ".././../assets/icons/pause.svg";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper.Title>STAR WARS</Wrapper.Title>
        <Wrapper.Text>THE RISE OF SKYWALKER</Wrapper.Text>
        <Wrapper.Subtitle>
          The surviving members of the resistance face the First Order once
          again, and the legendary conflict between the Jedi and the Sith
          reaches its peak bringing the Skywalker saga to its end.
        </Wrapper.Subtitle>
        <Rate allowHalf defaultValue={4} />
        <Wrapper.Div>
          <Wrapper.Btn1>
            <img src={pause} alt="pause" /> Watch Now
          </Wrapper.Btn1>
          <Wrapper.Btn t={true}>Trailer</Wrapper.Btn>
        </Wrapper.Div>

        <Wrapper.Movies>Popular Movies</Wrapper.Movies>
        <Wrapper.ImgWrapper>
          <Wrapper.Img src={avangers} alt="avangers" />
          <Wrapper.Img src={star_wars} alt="star_wars" />
          <Wrapper.Img src={captian} alt="captian" />
          <Wrapper.Img src={uncharted} alt="uncharted" />
          <Wrapper.Img src={star_wars2} alt="star_wars2" />
          <Wrapper.Img src={spiter} alt="spiter" />
        </Wrapper.ImgWrapper>
      </Wrapper>
    </Container>
  );
};

export default Hero;
