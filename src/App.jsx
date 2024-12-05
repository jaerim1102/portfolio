import React from "react";
import { Link } from "react-scroll";
import "./styles/App.css";
import Home from "./sections/Home";
import Profile from "./sections/Profile";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <div>
      <Home id="section1" title="Home" />
      <Profile id="section2" title="Profile" />
      <Skills id="section3" title="Skills" />
    </div>
  );
};

export default App;
