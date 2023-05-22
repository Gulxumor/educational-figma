import "./style.css";
import row from "../assets/images/row.png";
import phone from "../assets/images/phone.png";
import user from "../assets/images/user.png";
import like from "../assets/images/like.png";
import secure from "../assets/images/secure.png";
import chart from "../assets/images/chart.png";
import smth from "../assets/images/smth.png";
import negr from "../assets/images/negr.png";
import image1 from "../assets/images/image-1.png";
import couple from "../assets/images/couple.png";
import family from "../assets/images/family.png";
import woman from "../assets/images/woman.png";
import mobile from "../assets/images/mobile.png";
import burchak from "../assets/images/burchak.png";
import smilingFace from "../assets/images/smilingFace.png";
import visa from "../assets/images/visa.png";

const App = () => {
  return (
    <div>
      <nav className="main">
        <span className="main__text">Nibble Health is live!</span>
        <span className="main__text">
          Contact us to book a demo and learn more
        </span>
      </nav>

      <div
        id="wrapper"
        style={{ display: "flex", maxWidth: "1200px", margin: "0 auto" }}
      >
        <div className="text-wrapper" style={{ flex: "1" }}>
          <div className="nav-links-wrapper">
            <p className="nav-links">The Card</p>
            <p className="nav-links">For Employees</p>
            <p className="nav-links">About Us</p>
            <p className="nav-links">Download App</p>
          </div>
          <h1 className="title">Healthcare bills in small bites</h1>
          <h5 className="description">
            Nibble Health eliminates financial barriers to healthcare for
            employees, allowing them to seek care when they truly need it
          </h5>
          <div className="btn-wrapper">
            <button className="btn">Get in touch</button>
            <button className="btn">Download the app</button>
          </div>
        </div>
        <img src={image1} alt="user" style={{ flex: "1" }} />
      </div>

      <div className="hero">
        <div className="left">
          <h3 className="toptext">As featured in</h3>
          <h3 className="hero-title">
            Nibble is a healthcare safety net for your team members
          </h3>
          <p className="hero-text">
            Line of credit for employees to pay for healthcare expenses in
            installments over time
          </p>
          <p className="fee">No fees or interest ever</p>
          <p className="empowers">
            Empowers employees to seek care without worrying about paying all at
            once
          </p>

          <div className="visa">
            <img src={phone} alt="phone" />
            <p className="visa-text">
              Can be used at any medical provider where Visa is accepted,
              regardless of network
            </p>
          </div>
          <div className="visa">
            <img src={user} alt="phone" />
            <p className="visa-text">
              Helps employees stay healthy while keeping their financial goals
              intact
            </p>
          </div>
        </div>
        <div className="right">
          <h3 className="toptext">FORTUNE</h3>
          <img src={visa} alt="visa" className="visa-img" />
        </div>
      </div>
      <div className="secured">Secured by</div>

      {/* <!--! asosiy --> */}
      <div className="section">
        {/* <!--! background --> */}
        <div className="section-wrapper">
          {/* <!--! chap taraf --> */}
          <div className="section-left">
            {/* <!-- ? text-o'rab turuvchisi --> */}
            <div className="section-div">
              <h1 className="section-title">
                Paying for healthcare is a broken process
              </h1>
              <p className="section-text">
                Basic out-of-pocket expenses can be financially crippling, even
                with insurance
              </p>
            </div>
            <img src={row} alt="row-img" />
          </div>
          {/* <!-- ? o'ng-taraf --> */}
          <div className="section-right">
            <div className="div-position">
              <div className="right-blue-wrapper">
                <div className="right-blue"> </div>
                <img src={burchak} alt="burchak" className="burchak" />
              </div>
              <p className="position">in the US are due to medical debt</p>
            </div>
            {/* <!-- ? 2 --> */}
            <div className="div-position">
              <div className="right-blue-wrapper">
                <div className="right-blue"> </div>
                <img src={burchak} alt="burchak" className="burchak" />
              </div>
              <p className="position width">
                of patients need financial assistance over $500
              </p>
            </div>

            {/* <!-- ? 3  --> */}
            <div className="div-position">
              <div className="right-blue-wrapper">
                <div className="right-blue"> </div>
                <img src={burchak} alt="burchak" className="burchak" />
              </div>
              <p className="position p-width">
                of employees have a deductible of at least $400
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="employers">
        <div className="woman-section">
          <img src={woman} alt="woman" className="woman" />
          <p className="employers-title">Why employers choose Nibble</p>
        </div>
        <div className="texts">
          {/* <!-- ? 1  --> */}
          <div className="employers-wrapper">
            <div className="display">
              <img src={smth} alt="smth" />
              <p className="employers-text-title">
                Lower Corporate Healthcare Costs
              </p>
            </div>
            <p className="employers-text-desc">
              Help employees shift to more cost-effective health plans now that
              they have a deductible safety net
            </p>
          </div>

          {/* <!-- ? 2  --> */}
          <div className="employers-wrapper">
            <div className="display">
              <p className="employers-text-title e-width margin">
                Tie Financial Wellness to Actual Wellness
              </p>
            </div>
            <p className="employers-text-desc">
              Give your employees a tool that enables them to stay healthy while
              keeping their financial goals intact
            </p>
          </div>
          {/* <!-- ? 3  --> */}
          <div className="employers-wrapper">
            <div className="display">
              <img src={like} alt="smth" />
              <p className="employers-text-title e-width">
                Boost Benefits Utilization
              </p>
            </div>
            <p className="employers-text-desc">
              Arm employees with a powerful benefit that can be used by everyone
              at your company, regardless of age, role, location, or demographic
            </p>
          </div>
          {/* <!-- ? 4  --> */}
          <div className="employers-wrapper">
            <div className="display">
              <img src={chart} alt="smth" />
              <p className="employers-text-title">
                Increase Employee Retention
              </p>
            </div>
            <p className="employers-text-desc">
              Provide your workforce with an employer-sponsored program that
              demonstrates your commitment to their wellbeing
            </p>
          </div>

          {/* <!-- ? 5  --> */}
          <div className="employers-wrapper">
            <div className="display">
              <img src={secure} alt="smth" />
              <p className="employers-text-title title-width">
                Add Real Employee Value with Minimal Employer Overhead
              </p>
            </div>
            <p className="employers-text-desc desc-margin">
              Employers take no credit risk, are not a lender, and can enroll
              their workforce in minutes
            </p>
          </div>

          {/* <!--  ? section tugadi  --> */}
        </div>
      </div>

      <div className="work">
        <div className="top">
          <h1 className="top-title">How it works</h1>
          <p className="top-text">
            We pay your employees' healthcare bills, and they pay us back over
            time
          </p>
        </div>
        <div className="bottom">
          <div className="bottom-wrapper">
            <img src={negr} alt="" className="bottom-image" />
            <div className="bottom-text-wrapper">
              <p className="bottom-text">
                Employees pay for out-of-pocket expenses using their Nibble Card
              </p>
            </div>
          </div>
          {/* <!-- !2  --> */}
          <div className="bottom-wrapper">
            <img src={family} alt="" className="bottom-image" />
            <div className="bottom-text-wrapper">
              <p className="bottom-text">
                Employees pay for out-of-pocket expenses using their Nibble Card
              </p>
            </div>
          </div>

          {/* <!-- !3  --> */}
          <div className="bottom-wrapper">
            <img src={mobile} alt="" className="bottom-image" />
            <div className="bottom-text-wrapper">
              <p className="bottom-text">
                Employees pay for out-of-pocket expenses using their Nibble Card
              </p>
            </div>
          </div>

          {/* <!-- !4  --> */}
          <div className="bottom-wrapper">
            <img src={couple} alt="" className="bottom-image" />
            <div className="bottom-text-wrapper">
              <p className="bottom-text">
                Employees pay for out-of-pocket expenses using their Nibble Card
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="love">
        <h1>Employers love Nibble Health</h1>
        <div className="love-top">
          <div className="love-top-left"></div>
          <div className="love-top-right">
            <img src={smilingFace} alt="woman" />
          </div>
        </div>
        <div className="love-bottom"></div>
      </div>
    </div>
  );
};

export default App;
