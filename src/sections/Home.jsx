import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const Home = ({ id }) => {
  const [activeIndex, setActiveIndex] = useState(0); // 활성화된 글자의 전역 인덱스

  const texts = ["2025", "PORTFOLIO", "S2"]; // 애니메이션 대상 텍스트

  useEffect(() => {
    const totalChars = texts.join("").length; // 모든 글자의 개수
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalChars); // 전체 글자 반복
    }, 150); // 300ms 간격

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 정리
  }, [texts]);

  // 각 텍스트를 글자 단위로 렌더링
  const renderTextWithAnimation = () => {
    let globalCharIndex = 0; // 전역 인덱스 관리

    return texts.map((text, textIndex) => (
      <span key={textIndex}>
        {text.split("").map((char, charIndex) => {
          const currentCharIndex = globalCharIndex; // 현재 글자의 전역 인덱스 저장
          globalCharIndex++; // 다음 글자의 인덱스 증가
          return (
            <span
              key={charIndex}
              className={activeIndex === currentCharIndex ? "active" : ""}
            >
              {char}
            </span>
          );
        })}
      </span>
    ));
  };

  return (
    <div id={id} className="home-title">
      <div className="home-serve-title">{renderTextWithAnimation()}</div>

      <h1>
        <span>I'M JAERIM KIM</span>
        <span>A GROWING</span>
        <span>FRONT-END</span>
        <span>DEVELOPER</span>
      </h1>
      <p>안녕하세용? ٩( 'ω' ) 저는 성장하는 개발자 김재림입니다 ( 'ω' )و</p>
    </div>
  );
};

export default Home;
