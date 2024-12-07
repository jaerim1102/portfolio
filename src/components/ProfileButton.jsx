import React, { useState } from "react";
import "../styles/button.css";

const ProfileButton = () => {
  const [checkedState, setCheckedState] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
  });

  // 이미지 URL을 설정할 객체
  const imageUrls = {
    checkbox1: "/assets/img/button1-active.png",
    checkbox2: "/assets/img/button2-active.png",
    checkbox3: "/assets/img/button3-active.png",
    checkbox4: "/assets/img/button4-active.png",
    checkbox5: "/assets/img/button5-active.png",
    checkbox6: "/assets/img/button6-active.png",
  };

  const imageStyles = {
    checkbox1: {
      width: "6vw",
      top: "-13vw",
      right: "8vw",
    },
    checkbox2: {
      width: "2.8vw",
      top: "5vw",
      right: "33vw",
    },
    checkbox3: {
      width: "10vw",
      top: "1vw",
      right: "28vw",
    },
    checkbox4: {
      width: "15vw",
      top: "-6vw",
      right: "13vw",
    },
    checkbox5: {
      width: "7vw",
      top: "-26vw",
      right: "28vw",
    },
    checkbox6: {
      width: "5vw",
      top: "-20vw",
      right: "5vw",
    },
  };

  // 체크박스 클릭 시 상태를 업데이트하는 함수
  const handleCheckboxChange = (checkbox) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [checkbox]: !prevState[checkbox],
    }));
  };

  return (
    <div className="button-component">
      {Object.keys(checkedState).map((checkbox) => (
        <div key={checkbox} className="checkbox-container">
          <input
            type="checkbox"
            id={checkbox}
            checked={checkedState[checkbox]}
            onChange={() => handleCheckboxChange(checkbox)}
          />
          <label htmlFor={checkbox}>
            {checkedState[checkbox] && (
              <img
                src={imageUrls[checkbox]}
                alt={`Image for ${checkbox}`}
                className="checkbox-image"
                style={imageStyles[checkbox]} // 각 체크박스에 맞는 스타일 적용
              />
            )}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ProfileButton;
