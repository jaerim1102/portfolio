import React, { useState, useEffect } from "react";
import "../styles/download.css";

const DownloadButton = () => {
  return (
    <button className="download-button">
      자기소개서 <img src="/assets/img/download.svg" alt="다운로드" />
    </button>
  );
};

export default DownloadButton;
