import React, { useRef } from "react";
import "./Testimonials.css";

import ismail from "../../Assets/ismail.jpg";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="Testimonials">
      <img
        src="https://w7.pngwing.com/pngs/551/108/png-transparent-arrow-illustration-arrow-icon-right-arrow-angle-web-design-internet-thumbnail.png"
        alt=""
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src="https://w7.pngwing.com/pngs/109/979/png-transparent-button-arrow-computer-icons-encapsulated-postscript-take-back-angle-logo-monochrome-thumbnail.png"
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={ismail} alt="" />
                <div>
                  <h3>Ismail G</h3>
                  <span>Ismailtech,Rwanda</span>
                </div>
              </div>
              <p style={{ lineHeight: "20px" }}>
                Choosing to pursue my degree at E-learning was one of the best
                decision I've ever made.the supportive community,
                state-of-the-art facilities,and commitment to academic
                excellence have truly have exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img
                  src="https://assets.bizclikmedia.net/900/0dfba4c147bb56ce9c71ce4048e660c6:88d904cad5ba4779173ecd4d2ba0bb3a/173211-140807-286.webp"
                  alt=""
                />
                <div>
                  <h3>Ismail G</h3>
                  <span>Ismailtech,Rwanda</span>
                </div>
              </div>
              <p style={{ lineHeight: "20px" }}>
                Choosing to pursue my degree at E-learning was one of the best
                decision I've ever made.the supportive community,
                state-of-the-art facilities,and commitment to academic
                excellence have truly have exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img
                  src="https://image.cnbcfm.com/api/v1/image/104332177-Elon_Musk_smile.jpg?v=1533729063&w=630&h=354&ffmt=webp&vtcrop=y"
                  alt=""
                />
                <div>
                  <h3>Ismail G</h3>
                  <span>Ismailtech,Rwanda</span>
                </div>
              </div>
              <p style={{ lineHeight: "20px" }}>
                Choosing to pursue my degree at E-learning was one of the best
                decision I've ever made.the supportive community,
                state-of-the-art facilities,and commitment to academic
                excellence have truly have exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img
                  src="https://assets.bizclikmedia.net/900/0dfba4c147bb56ce9c71ce4048e660c6:88d904cad5ba4779173ecd4d2ba0bb3a/173211-140807-286.webp"
                  alt=""
                />
                <div>
                  <h3>Ismail G</h3>
                  <span>Ismailtech,Rwanda</span>
                </div>
              </div>
              <p style={{ lineHeight: "20px" }}>
                Choosing to pursue my degree at E-learning was one of the best
                decision I've ever made.the supportive community,
                state-of-the-art facilities,and commitment to academic
                excellence have truly have exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
