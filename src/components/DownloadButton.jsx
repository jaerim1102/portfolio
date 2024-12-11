import React from "react";
import "../styles/download.css";

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/jaerim.pdf"; // 다운로드할 파일 경로
    link.download = "김재림_자기소개서.pdf"; // 다운로드될 파일 이름
    link.click();
  };

  return (
    <button className="download-button" onClick={handleDownload}>
      자기소개서 <img src="/assets/img/download.svg" alt="다운로드" />
    </button>
  );
};

export default DownloadButton;
