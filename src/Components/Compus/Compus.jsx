import React from "react";
import "./Compus.css";
import { BiArrowFromLeft } from "react-icons/bi";
const Compus = () => {
  return (
    <div className="compus">
      <div className="gallery">
        <img
          src="https://www.jbcc1.com/wp-content/uploads/2019/08/Bachelor-degree.jpeg"
          alt=""
        />
        <img
          src="https://www.jbcc1.com/wp-content/uploads/2019/08/Bachelor-degree.jpeg"
          alt=""
        />
        <img
          src="https://www.jbcc1.com/wp-content/uploads/2019/08/Bachelor-degree.jpeg"
          alt=""
        />
        <img
          src="https://www.jbcc1.com/wp-content/uploads/2019/08/Bachelor-degree.jpeg"
          alt=""
        />
      </div>
      <button className="btn22 dark-btn">
        see more here <BiArrowFromLeft />{" "}
      </button>
    </div>
  );
};

export default Compus;
