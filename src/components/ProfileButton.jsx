import React, { useState, useEffect } from "react";
import "../styles/button.css";

const ProfileButton = () => {
  return (
    <div className="button-component">
      <input type="checkbox" id="checkbox1" />
      <label htmlFor="checkbox1"></label>

      <input type="checkbox" id="checkbox2" />
      <label htmlFor="checkbox2"></label>

      <input type="checkbox" id="checkbox3" />
      <label htmlFor="checkbox3"></label>

      <input type="checkbox" id="checkbox4" />
      <label htmlFor="checkbox4"></label>

      <input type="checkbox" id="checkbox5" />
      <label htmlFor="checkbox5"></label>

      <input type="checkbox" id="checkbox6" />
      <label htmlFor="checkbox6"></label>
    </div>
  );
};

export default ProfileButton;
