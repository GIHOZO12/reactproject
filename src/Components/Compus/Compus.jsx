import React from "react";
import "./Compus.css";
import { BiArrowFromLeft } from "react-icons/bi";
const Compus = () => {
  return (
    <div className="compus">
      <div className="gallery">
        <img
          src="https://i0.wp.com/foreverlostintravel.com/wp-content/uploads/2020/02/Harvard-buildings.jpg?fit=688%2C516&ssl=1"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Lr-SsOW_i4gFXCGuXFKJcEJt1t6spvyf5X9urjH6rQ&s"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS9dKYGIYlFpz8zudhE5l4JV9jM5pr-fPkFcfQ7RdZtA&s"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0xtmPc6pqsed7bnQqMeGKPNsmfxaNF0h6L9HPPu3Rg&s"
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
