import React, { useEffect, useState, useRef } from "react";
import pb from "../lib/pocketbase";
import "../styles/skills.css";

const Skills = ({ id }) => {
  const [skills, setSkills] = useState([]);
  const [visible, setVisible] = useState(false); // 섹션이 뷰포트에 들어왔는지 여부
  const sectionRef = useRef(null); // 섹션 DOM 참조

  useEffect(() => {
    // PocketBase 데이터 가져오기
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

  useEffect(() => {
    // Intersection Observer 설정
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true); // 뷰포트에 들어오면 visible 상태를 true로 설정
        }
      },
      { threshold: 0.5 } // 50%가 보일 때 트리거
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id={id} ref={sectionRef} className="skill-component">
      <div className="section-title">
        <h2>Skills</h2>
        <p>
          이 섹션에 포함된 기술 스택들은 단순한 이론적 지식에 그치지 않고,
          <br /> 실제 프로젝트 개발 환경에서 사용한 도구와 프레임워크를
          포함합니다.
        </p>
      </div>
      <table>
        <tbody>
          {skills.map((skill) => (
            <tr key={skill.id}>
              <td className="skill-img-td">
                <img
                  src={pb.getFileUrl(skill, skill.skill_img)}
                  alt={skill.skill_name}
                  className="skill-img"
                />
              </td>
              <td className="skill-name">{skill.skill_name}</td>
              <td className="progress-td">
                <div className="progress-bar">
                  <div
                    className={`progress-bar-fill ${
                      visible ? "progress-bar-fill-animate" : ""
                    }`}
                    style={{
                      width: `${visible ? skill.skill_proficiency : 0}%`,
                    }}
                  ></div>
                </div>
                <span className="proficiency-text">
                  {skill.skill_proficiency}%
                </span>
              </td>
              <td className="skill-ex">{skill.skill_explanation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Skills;
