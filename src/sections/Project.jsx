import React, { useEffect, useState } from "react";
import pb from "../lib/pocketbase"; // PocketBase 인스턴스
import "../styles/project.css";

const Project = () => {
  const [projects, setProjects] = useState([]);

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
            />
            <p>
              <strong>Team:</strong> {project.project_team}
            </p>
            <p>
              <strong>Explanation:</strong> {project.project_explanation}
            </p>
            <p>
              <strong>My Role:</strong> {project.project_mine}
            </p>
            <p>
              <strong>Additional Info:</strong> {project.project_etc}
            </p>
            <p>
              <strong>URL:</strong>{" "}
              <a
                href={project.project_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.project_url}
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href={project.project_github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.project_github}
              </a>
            </p>
            <p>
              <strong>Stack:</strong>{" "}
              {project.project_stack && project.project_stack.length > 0
                ? project.project_stack.join(", ")
                : "No stack provided"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
