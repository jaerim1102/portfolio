import React, { useEffect, useState } from "react";
import pb from "../lib/pocketbase"; // PocketBase 인스턴스
import "../styles/project.css";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState({}); // 스킬 데이터를 저장
  const [selectedProject, setSelectedProject] = useState(null); // 선택된 프로젝트
  const [isPopupOpen, setIsPopupOpen] = useState(false); // 팝업 상태

  useEffect(() => {
    const fetchProjectsAndSkills = async () => {
      try {
        // 프로젝트 가져오기
        const projectRecords = await pb.collection("project").getList(1, 50);
        setProjects(projectRecords.items);

        // 모든 스킬 데이터 가져오기
        const skillRecords = await pb.collection("skills").getFullList(200, {
          fields: "id,skill_name", // 필요한 필드만 가져오기
        });

        // 스킬 데이터를 객체로 변환 (id -> skill_name 매핑)
        const skillMap = skillRecords.reduce((acc, skill) => {
          acc[skill.id] = skill.skill_name;
          return acc;
        }, {});

        setSkills(skillMap);
      } catch (error) {
        console.error("Error fetching projects or skills:", error);
      }
    };

    fetchProjectsAndSkills();
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
            <p className="project-time">{project.Project_time}</p>
            <h2>{project.project_name}</h2>
            <p className="project-ex">{project.project_explanation}</p>
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
            <div className="popup-header">
              <h2>{selectedProject.project_name}</h2>
              <button className="popup-close" onClick={closePopup}></button>
            </div>
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
              <a
                href={selectedProject.project_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/img/url.svg"
                  alt="Project Link"
                  style={{ cursor: "pointer" }}
                  className="popup-icon"
                />
              </a>
            </p>
            <p>
              <a
                href={selectedProject.project_github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/img/github.png"
                  alt="Project Link"
                  style={{ cursor: "pointer" }}
                  className="popup-icon"
                />
              </a>
            </p>
            <p>
              <strong>Stack:</strong>{" "}
              {selectedProject.project_stack &&
              selectedProject.project_stack.length > 0
                ? selectedProject.project_stack.map((skillId) =>
                    skills[skillId] ? (
                      <span key={skillId} className="skill-name">
                        {skills[skillId]}
                      </span>
                    ) : (
                      <span key={skillId} className="skill-name">
                        Unknown Skill
                      </span>
                    )
                  )
                : "No stack provided"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
