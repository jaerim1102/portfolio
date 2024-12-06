import React, { useEffect, useState } from "react";
import pb from "../lib/pocketbase";
import "../styles/skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const records = await pb.collection("skills").getList(1, 50);
        setSkills(records.items);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div>
      <table>
        {skills.map((skill) => (
          <tr key={skill.id}>
            <td>
              <img
                src={pb.getFileUrl(skill, skill.skill_img)}
                alt={skill.skill_name}
                className="skill-img"
              />
            </td>
            <td>{skill.skill_name}</td>
            <td>{skill.skill_explanation}</td>
            <td>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${skill.skill_proficiency}%` }}
                ></div>
              </div>
              <span className="proficiency-text">
                {skill.skill_proficiency}%
              </span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Skills;
