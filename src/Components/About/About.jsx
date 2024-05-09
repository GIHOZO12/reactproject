import React from "react";
import "./About.css";
import { PiPlay } from "react-icons/pi";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img
          src="https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/graduates.jpg?itok=H3SVewvT"
          alt=""
          className="about-img"
        />
        <PiPlay
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders To day</h2>
        <p>
          Embark on a transformative educational programs journey with our
          university's comprehensive education progrms .our cutting-edge
          curriculum is designed to empower student with the knowledge,skills,
          and experience needed to excel in the dynamic field of education
        </p>
        <p>
          With a focus innovation ,hands-on learning, and personalised
          mentorship,our programs prepare aspiring educators to make a
          meaningful impact in classroom s,schools,and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administartor,counselor,or
          educational Leaders ,our diverse range of programs offers the perfect
          pathway to achieve your goal and unlock yourfull potential in future
          of education
        </p>
      </div>
    </div>
  );
};

export default About;
