import React from "react";
import { Link } from "react-scroll";
import "./styles/App.css";
import Home from "./sections/Home";
import Profile from "./sections/Profile";
import Skills from "./sections/Skills";
import Project from "./sections/Project";
import Menu from "./components/menu";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div className="main">
      <Menu />
      <Home id="section1" title="Home" />
      <Profile id="section2" title="Profile" />
      <Project id="section3" title="Project" />
      <Skills id="section4" title="Skills" />
      <Contact id="section5" title="Contact" />
    </div>
  );
};

export default App;
