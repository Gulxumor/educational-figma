import React, { Component } from "react";
import logo from "../assets/images/footer-logo.png";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div>
          <img className="footer-logo" src={logo} alt="logo" />
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default Footer;



// Footer section is not completed yet