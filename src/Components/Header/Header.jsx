import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaBars, FaGraduationCap, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

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
        <li>
          {" "}
          <Link to="hero-text" smooth={true} offset={0} duration={500}>
            Home
          </Link>{" "}
        </li>
        <li>
          <Link to="about" smooth={true} offset={-260} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-150} duration={500}>
            Course
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonial
          </Link>
        </li>
        <li>
          <button className="btn22" id="btn">
            <Link to="contact-col" smooth={true} offset={-260} duration={500}>
              Contact us
            </Link>
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
