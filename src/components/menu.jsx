import React, { useState, useEffect } from "react";

import "../styles/menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>Project</li>
        <li>Skill</li>
      </ul>
    </div>
  );
};

export default Menu;
