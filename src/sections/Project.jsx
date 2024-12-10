import React, { useEffect, useState, useRef } from "react";
import pb from "../lib/pocketbase"; // PocketBase 인스턴스
import "../styles/project.css";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const projectContentRef = useRef(null); // project-content 참조

  useEffect(() => {
    const fetchProjectsAndSkills = async () => {
      try {
        const projectRecords = await pb.collection("project").getList(1, 50);
        setProjects(projectRecords.items);

        const skillRecords = await pb.collection("skills").getFullList(200, {
          fields: "id,skill_name",
        });

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
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedProject(null);
    setIsPopupOpen(false);
  };

  const scrollLeft = () => {
    if (projectContentRef.current) {
      const cardWidth = projectContentRef.current.firstChild.offsetWidth; // 카드의 너비
      projectContentRef.current.scrollBy({
        left: -cardWidth, // 카드 너비만큼 왼쪽으로 이동
        behavior: "smooth", // 부드러운 스크롤
      });
    }
  };

  const scrollRight = () => {
    if (projectContentRef.current) {
      const cardWidth = projectContentRef.current.firstChild.offsetWidth; // 카드의 너비
      projectContentRef.current.scrollBy({
        left: cardWidth, // 카드 너비만큼 오른쪽으로 이동
        behavior: "smooth", // 부드러운 스크롤
      });
    }
  };

  return (
    <div className="project-container">
      <div className="project-header">
        <h2 className="project-h2">Projects</h2>
        <p>
          <span>이미지 클릭 시</span> 자세한 정보를 보실 수 있습니다!
        </p>
      </div>
      <div className="project-wrapper">
        {/* 왼쪽 화살표 */}
        <button className="scroll-button left" onClick={scrollLeft}>
          <img src="/assets/img/left.svg" alt="" />
        </button>

        {/* 프로젝트 콘텐츠 */}
        <div className="project-content" ref={projectContentRef}>
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

        {/* 오른쪽 화살표 */}
        <button className="scroll-button right" onClick={scrollRight}>
          <img src="/assets/img/right.svg" alt="" />
        </button>
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
              <button className="popup-close" onClick={closePopup}>
                X
              </button>
            </div>
            <p className="popup-ex">{selectedProject.project_explanation}</p>
            <img
              src={pb.getFileUrl(selectedProject, selectedProject.project_img)}
              alt={selectedProject.project_name}
              className="popup-image"
            />
            <p>
              <strong>Team:</strong> {selectedProject.project_team}
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
