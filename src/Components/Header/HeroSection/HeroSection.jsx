import React from "react";
import "./HeroSection.css";
import { BiArrowFromLeft } from "react-icons/bi";
const HeroSection = () => {
  return (
    <div className="hero ">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with
          knowledge, skills , and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn22">
          Explore more
          <BiArrowFromLeft style={{ fontSize: "30px" }} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
