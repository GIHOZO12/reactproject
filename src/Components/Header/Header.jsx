import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaBars, FaGraduationCap, FaTimes } from "react-icons/fa";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(true);
  };
  const handleHideMenu = () => {
    setMobileMenu(false);
  };
  return (
    <nav className={`${sticky ? `dark-nav` : ""}`}>
      <FaGraduationCap style={{ fontSize: "5em" }} />

      <ul id="menus" className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>Home</li>
        <li>Course</li>
        <li>About us</li>
        <li>Testimonial</li>
        <li>
          <button className="btn22" id="btn">
            Contact us
          </button>
        </li>
      </ul>

      {mobileMenu === false && (
        <FaBars
          className="menu-icon"
          onClick={toggleMenu}
          style={{ fontSize: "30px", marginRight: "10%" }}
        />
      )}
      {mobileMenu === true && (
        <FaTimes
          onClick={handleHideMenu}
          style={{ fontSize: "30px", marginRight: "10%", color: "red" }}
        />
      )}
    </nav>
  );
};

export default Header;
