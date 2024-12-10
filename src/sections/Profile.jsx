import React, { useState, useEffect } from "react";
import "../styles/profile.css";
import ProfileImg from "/assets/img/profile-img.png";
import ProfileButton from "../components/ProfileButton";
import DownloadButton from "../components/DownloadButton";

const Profile = ({ id }) => {
  return (
    <div id={id} className="main-profile">
      <div className="profile-left">
        <div className="profile">
          <h2>Profile</h2>
          <DownloadButton />
          <div className="profile-content">
            <div className="profile-details">
              <span>NAME</span>
              <span>BIRTH</span>
              <span>H.P.</span>
              <span>E-MAIL</span>
            </div>
            <div className="profile-info">
              <p>김재림 / KIM JAERIM</p>
              <p>2001.11.02</p>
              <p>010-4075-1175</p>
              <p>jaerim1102@naver.com</p>
            </div>
          </div>
        </div>
        <div className="education">
          <h2>Education</h2>
          <div className="profile-education">
            <div className="education-details">
              <span>2017.03 - 2020.03</span>
              <span>2020.03 - 2022.03</span>
              <span>2022.03 - 2025.03</span>
            </div>
            <div className="education-info">
              <p>묵호고등학교</p>
              <p>동국대학교 미술학과</p>
              <p>계원예술대학교 디지털미디어디자인과</p>
            </div>
          </div>
        </div>
        <div className="awards">
          <h2>Awards / Activities</h2>
          <div className="profile-education">
            <div className="awards-details">
              <span>2021 경상북도 미술대전</span>
              <span>2021 교육부 서포터즈 </span>
              <span>2023 커뮤니케이션 디자인 국제 공모전</span>
              <span>멋쟁이사자처럼 프론트엔드 스쿨 10기</span>
              <span>2024 계원예술대학교 조형제</span>
            </div>
            <div className="awards-info">
              <p>시각디자인 부문 입선</p>
              <p>영상 편집 총괄</p>
              <p>동상</p>
              <p>수료</p>
              <p>최우수작</p>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-img">
        <img src={ProfileImg} />
        <ProfileButton />
      </div>
    </div>
  );
};

export default Profile;
