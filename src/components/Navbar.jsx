import React from "react";
import logo from "../assets/images/logo.png";
import "./Navbar.css";
import { navLink } from "../Mock.js";

class Navbar extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="wrapper">
          <ul className="nav-items">
            {navLink.map((link) => (
              <li className="nav-item">{link.title}</li>
            ))}
          </ul>
          <button className="login-btn">Sign Up</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
