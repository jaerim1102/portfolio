import React from "react";
import "../styles/contact.css";

const Contact = ({ id }) => {
  return (
    <div id={id} className="contact-container">
      <h2>CONTACT</h2>
      <div className="contact-list">
        <a href="https://github.com/jaerim1102" target="_blank">
          <img src="/assets/img/github.png" alt="" />
        </a>
        <a href="https://velog.io/@jaaerim/" target="_blank">
          <img src="/assets/img/velog.png" alt="" />
        </a>
        <a href="https://open.kakao.com/o/s3Urqy4g" target="_blank">
          <img src="/assets/img/kakao.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
