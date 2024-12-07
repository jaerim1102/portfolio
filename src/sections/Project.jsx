import React, { useState, useEffect } from "react";
import pb from "../lib/pocketbase";
import "../styles/project.css";

const Project = ({ id }) => {
  return (
    <div id={id} className="project-container">
      <h2>Project</h2>
      <div className="project-content"></div>
    </div>
  );
};

export default Project;
