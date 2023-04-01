import React, { Component } from "react";
import "./SignUp.css";

class SignUp extends Component {
  render() {
    return (
      <div className="signup-wrapper">
        <div>
          <h1 className="signup-text">Sign Up For Our Newsletter</h1>
          <div>
            <input
              type="text"
              placeholder="Enter your e-mail here"
              className="signUp-input"
            />
            <button className="signUp-btn">Subscribe Now</button>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
