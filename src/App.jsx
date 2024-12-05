import React from "react";
import { Link } from "react-scroll";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="section1" smooth={true}>
          Home
        </Link>
        <Link to="section2" smooth={true}>
          About
        </Link>
        <Link to="section3" smooth={true}>
          Projects
        </Link>
        <Link to="section4" smooth={true}>
          Contact
        </Link>
      </nav>
      <Section id="section1" title="Home" />
      <Section id="section2" title="About" />
      <Section id="section3" title="Projects" />
      <Section id="section4" title="Contact" />
    </div>
  );
};

export default App;
