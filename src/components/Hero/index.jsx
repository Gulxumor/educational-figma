import food1 from "../../assets/images/hero_food_o-1.png";
// import food2 from "../../assets/images/hero_food_o-2.png";
import smile from "../../assets/images/hero_mood.png";
import hero_img from "../../assets/images/hero_img.png";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";

const Hero = () => {
  return (
    <div className="wrapper hero">
      <div className="left">
        <h3 className="title">__Restaurant</h3>
        <div className="food">
          Good F
          <span>
            <img src={food1} alt="food" />
          </span>
          <span>
            <img src={food1} alt="food" />
          </span>
          d
        </div>

        <div className="food mood">
          Good M
          <span>
            <img src={smile} alt="food" />
          </span>
          <span>
            <img className="ml" src={smile} alt="food" />
          </span>
          d
        </div>

        <div className="desc">
          The food palace is an neighborhood restaurent serving seasonal global
          cuisine driven by the faire.
        </div>

        <div className="btn">Explore food menu</div>

        <div className="social">
          <a
            href="https://www.facebook.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://www.twitter.com" target={"_blank"} rel="noreferrer">
            <img src={twitter} alt="twitter" />
          </a>
        </div>
      </div>

      <img src={hero_img} alt="right_image" className="right" />
    </div>
  );
};

export default Hero;
