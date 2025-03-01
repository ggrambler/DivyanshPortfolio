import React from "react";
import "./Education.css";

const educationData = [
  {
    institution: "SRM Institute of Science and Technology",
    duration: "Aug 2022 – Jul 2026",
    degree: "Bachelors of Technology in Computer Science and Engineering with specialization in AI and ML",
    gpa: "GPA: 9.81",
  },
  {
    institution: "Dayanand Anglo-Vedic (DAV) Public School, Jamshedpur",
    duration: "Apr 2019 – Jun 2021",
    degree: "Indian Certificate of Secondary Education 12th",
    gpa: "Percentage: 96.2%",
  },
  {
    institution: "Sri Krishna Public School, Jamshedpur",
    duration: "Apr 2018 – Mar 2019",
    degree: "Central Board of Secondary Education 10th",
    gpa: "Percentage: 95.4%",
  },
];

const Education = () => {
  return (
    <div className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-icon">🎓</div>
            <div className="education-details">
              <b>{edu.institution} ({edu.duration})</b>
              <p>{edu.degree}</p>
              <span>{edu.gpa}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
