import React, { useState, useEffect } from "react";
import "../styles/profile.css";

const Profile = () => {
  return (
    <div className="main-profile">
      <div className="profile-content">
        <h2>Profile</h2>
        <div className="profile-name">
          <span>NAME</span>
          <p>김재림 / KIM JAERIM</p>
        </div>
        <div className="profile-birth">
          <span>BIRTH</span>
          <p>2001.11.02</p>
        </div>
        <div className="profile-hp">
          <span>H.P.</span>
          <p>010-4075-1175</p>
        </div>
        <div className="profile-hp">
          <span>E-MAIL</span>
          <p>jaerim1102@naver.com</p>
        </div>
      </div>
      <div className="profile-education">
        <h2>Education</h2>
        <div>
          <span>2017.03 - 2020.03</span>
          <p>묵호고등학교</p>
        </div>
        <div>
          <span>2020.03 - 2022.03</span>
          <p>동국대학교 미술학과 시각디자인 전공</p>
        </div>
        <div>
          <span>2022.03 - 2025.03</span>
          <p>계원예술대학교 디지털미디어디자인과</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
