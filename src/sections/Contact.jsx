import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_7hzlcjl", // EmailJS 서비스 ID
        "template_fgmr1yh", // EmailJS 템플릿 ID
        formData,
        "-skzfYimifGMo6fXW" // EmailJS 유저 ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSent(true);
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
        }
      );
  };

  return (
    <div id={id} className="contact-container">
      <h2>CONTACT</h2>

      {/* 이메일 폼 */}
      <form onSubmit={handleSubmit} className="email-form">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={formData.from_name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          value={formData.from_email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send</button>
        {isSent && (
          <p className="success-message">이메일이 성공적으로 전송되었습니다!</p>
        )}
      </form>
      <div className="contact-list">
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
  );
};

export default Contact;
