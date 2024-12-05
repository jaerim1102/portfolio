import React from "react";
import { Link } from "react-scroll";
import "./styles/App.css";
import Home from "./sections/Home";

const App = () => {
  return (
    <div>
      <Home id="section1" title="Home" />
      {/* <Section id="section2" title="About" />
      <Section id="section3" title="Projects" />
      <Section id="section4" title="Contact" /> */}
    </div>
  );
};

export default App;
