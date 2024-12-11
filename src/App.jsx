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
    <div>
      <div className="main">
        <Menu />
        <Home id="section1" title="Home" />
        <Profile id="section2" title="Profile" />
        <Project id="section3" title="Project" />
        <Skills id="section4" title="Skills" />
        <Contact id="section5" title="Contact" />
      </div>
      <div className="main-mobile">
        <h2>
          안녕하세용? <br /> <span>프론트엔드 개발자 김재림</span>입니다. <br />{" "}
          웹 환경에서 접속해 주세요!
        </h2>
        <p>010-4075-1175</p>
        <p>jaerim1102@naver.com</p>
        <div className="main-list">
          <a
            href="https://github.com/jaerim1102"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/img/github.png" alt="" />
          </a>
          <a
            href="https://velog.io/@jaaerim/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/img/velog.png" alt="" />
          </a>
          <a
            href="https://open.kakao.com/o/s3Urqy4g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/img/kakao.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
