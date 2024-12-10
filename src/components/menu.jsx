import React from "react";
import { Link } from "react-scroll";
import "../styles/menu.css";

const Menu = () => {
  return (
    <div className="menu-component">
      <ul>
        <li>
          <Link to="section2" smooth={true} duration={500}>
            INTRODUCE ME
          </Link>
        </li>
        <li>
          <Link to="section3" smooth={true} duration={500}>
            PROJECT
          </Link>
        </li>
        <li>
          <Link to="section4" smooth={true} duration={500}>
            SKILLS
          </Link>
        </li>
        <li>
          <Link to="section5" smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
