import React from "react";
import { Link } from "react-scroll";
import "../styles/menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="section1" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="section2" smooth={true} duration={500}>
            Profile
          </Link>
        </li>
        <li>
          <Link to="section3" smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li>
          <Link to="section4" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
