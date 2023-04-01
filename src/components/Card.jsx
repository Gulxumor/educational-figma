import React, { Component } from "react";
import "./Card.css";
import { card } from "../Mock.js";
import watch from "../assets/images/watch.png";
import person from "../assets/images/people.png";
import rating from "../assets/images/rating.png";
import location from "../assets/images/location.png";
import background from "../assets/images/background-img.png";

class Card extends Component {
  render() {
    return (
      <div className="main">
        {card.map((card) => (
          <div key={card.id} className="card-container">
            <img className="card-image" src={background} alt="img" />
            <div className="card-description">
              <p className="card-title">{card.title}</p>
              <div className="card-wrapper">
                <span className="card-inner">
                  <img src={watch} alt="watch" />
                  <p className="card-text">{card.day}</p>
                </span>
                <span className="card-inner">
                  <img src={person} alt="person" />
                  <p className="card-text">{card.person}</p>
                </span>
                <span className="card-inner">
                  <img src={rating} alt="rating" />
                  <p className="card-text">{card.rating}</p>
                  <p className="card-text">{card.reveiw}</p>
                </span>
              </div>
              <div className="card-outer">
                <div className="location">
                  <img src={location} alt="location" />
                  <p className="card-text">{card.location}</p>
                </div>
                <button className="card-btn">{card.price}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
