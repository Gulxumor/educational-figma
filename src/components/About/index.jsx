import ketchup from "../../assets/images/about_section_img.png";

const About = () => {
  return (
    <div className="wrapper about">
      <img src={ketchup} alt="ketchup" />
      <div className="right">
        <div className="about_wrapper">
          <h2 className="title about__title">About us</h2>
          <h3 className="header">Simple Way of Eating Delicious</h3>
          <p className="about_desc desc">
            About us Simple Way of Eating Delicious Keep healthy food readily
            available. When you get hungry, you’re more likely to eat the first
            thing you see on the counter or in the Explore our story
          </p>
        </div>
        <button className="btn">Explore our story</button>
      </div>
    </div>
  );
};

export default About;
