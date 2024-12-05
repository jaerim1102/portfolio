import React, { useEffect, useState } from "react";
import pb from "../lib/pocketbase";

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
      <h2>My Skills</h2>
      <div>
        {skills.map((skill) => (
          <div key={skill.id}>
            {/* skill_img가 파일 필드일 경우 */}
            <img src={pb.getFileUrl(skill, skill.skill_img)} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
