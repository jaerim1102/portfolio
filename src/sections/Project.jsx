import React, { useEffect, useState } from "react";
import pb from "../lib/pocketbase"; // PocketBase 인스턴스
import "../styles/project.css";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null); // 선택된 프로젝트
  const [isPopupOpen, setIsPopupOpen] = useState(false); // 팝업 상태

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const records = await pb.collection("project").getList(1, 50); // 1페이지에 50개 로드
        setProjects(records.items);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const openPopup = (project) => {
    setSelectedProject(project); // 선택된 프로젝트 설정
    setIsPopupOpen(true); // 팝업 열기
  };

  const closePopup = () => {
    setSelectedProject(null); // 선택된 프로젝트 초기화
    setIsPopupOpen(false); // 팝업 닫기
  };

  return (
    <div className="project-container">
      <h2 className="project-h2">Projects</h2>
      <div className="project-content">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <p>{project.Project_time}</p>
            <h2>{project.project_name}</h2>
            <img
              src={pb.getFileUrl(project, project.project_img)}
              alt={project.project_name}
              className="project-image"
              onClick={() => openPopup(project)} // 이미지 클릭 이벤트
            />
          </div>
        ))}
      </div>

      {/* 팝업 */}
      {isPopupOpen && selectedProject && (
        <div className="popup-overlay" onClick={closePopup}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()} // 팝업 내부 클릭 시 닫히지 않음
          >
            <h2>{selectedProject.project_name}</h2>
            <img
              src={pb.getFileUrl(selectedProject, selectedProject.project_img)}
              alt={selectedProject.project_name}
              className="popup-image"
            />
            <p>
              <strong>Team:</strong> {selectedProject.project_team}
            </p>
            <p>
              <strong>Explanation:</strong>{" "}
              {selectedProject.project_explanation}
            </p>
            <p>
              <strong>My Role:</strong> {selectedProject.project_mine}
            </p>
            <p>
              <strong>Additional Info:</strong> {selectedProject.project_etc}
            </p>
            <p>
              <strong>URL:</strong>{" "}
              <a
                href={selectedProject.project_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedProject.project_url}
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href={selectedProject.project_github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedProject.project_github}
              </a>
            </p>
            <p>
              <strong>Stack:</strong>{" "}
              {selectedProject.project_stack &&
              selectedProject.project_stack.length > 0
                ? selectedProject.project_stack.join(", ")
                : "No stack provided"}
            </p>
            <button className="popup-close" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
