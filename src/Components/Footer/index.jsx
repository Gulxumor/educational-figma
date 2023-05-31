import { Container, Img, Wrapper } from "./style";
import logo from "../../assets/images/logo.png";
import gallery from "../../assets/images/app-gallery.png";
import tiktok from "../../assets/images/tiktok.png";
import twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";
import partner from "../../assets/images/partner.png";
import education from "../../assets/images/education.png";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Wrapper.InnerWrapper>
          <Img src={logo} />
          <Wrapper.SubTitle>Get the app:</Wrapper.SubTitle>
          <Wrapper.Div>
            <Img src={gallery} />
            <Wrapper.App />
            <Wrapper.Google />
          </Wrapper.Div>
          <Wrapper.SubTitle>Follow us:</Wrapper.SubTitle>
          <Wrapper.Div g>
            <Img src={linkedin} />
            <Img src={facebook} />
            <Img src={instagram} />
            <Img src={twitter} />
            <Img src={tiktok} />
          </Wrapper.Div>
        </Wrapper.InnerWrapper>

        <Wrapper.InnerWrapper>
          <Wrapper.Title>About</Wrapper.Title>
          <Wrapper.Text href="#" mt>
            Company
          </Wrapper.Text>
          <Wrapper.Text href="#">Leadership</Wrapper.Text>
          <Wrapper.Text href="#">Jobs - HIRING!</Wrapper.Text>
          <Wrapper.Text href="#">Pricing</Wrapper.Text>
          <Wrapper.Text href="#">Press</Wrapper.Text>
          <Wrapper.Text href="#">Investors</Wrapper.Text>
        </Wrapper.InnerWrapper>

        <Wrapper.InnerWrapper>
          <Wrapper.Title>Solutions </Wrapper.Title>
          <Wrapper.Text href="#" mt>
            At School{" "}
          </Wrapper.Text>
          <Wrapper.Text href="#">At Work</Wrapper.Text>
          <Wrapper.Text href="#">At Home</Wrapper.Text>
        </Wrapper.InnerWrapper>

        <Wrapper.InnerWrapper>
          <Wrapper.Title> Resources</Wrapper.Title>
          <Wrapper.Text href="#" mt>
            Study with Kurtis{" "}
          </Wrapper.Text>
          <Wrapper.Text href="#">Blog</Wrapper.Text>
          <Wrapper.Text href="#">Kurtis Certified</Wrapper.Text>
          <Wrapper.Text href="#">Help Center</Wrapper.Text>
          <Wrapper.Text href="#">Library</Wrapper.Text>
          <Wrapper.Text href="#">Shop</Wrapper.Text>
          <Wrapper.Text href="#">Safety center</Wrapper.Text>
        </Wrapper.InnerWrapper>

        <div className="wrapper">
          <Wrapper.InnerWrapper>
            <Wrapper.Title w>Terms and conditions</Wrapper.Title>
            <Wrapper.Text href="#" mt>
              Terms and Conditions
            </Wrapper.Text>
            <Wrapper.Text href="#">Privacy Policy</Wrapper.Text>
            <Wrapper.Text href="#">US Privacy Laws</Wrapper.Text>
            <Wrapper.Text href="#">Children’s Privacy Policy</Wrapper.Text>
            <Wrapper.Text href="#">
              Inclusion and Accessibility policy
            </Wrapper.Text>
          </Wrapper.InnerWrapper>

          <div className="img-wrapper">
            <Img src={partner} />
            <Img src={education} />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Footer;
