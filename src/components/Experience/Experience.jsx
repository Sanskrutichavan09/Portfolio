/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  const experiences = [
    {
      date: "October 2024",
      role: "React developer intern",
      company: "Adiasquare Software Solutions OPC Pvt.Ltd.",
      description: [
        "Learned React.js during internship and built interactive UI components",
        "Worked on improving UI responsiveness with CSS and Tailwind CSS"
      ]
    },
    {
      date: "February 2024",
      role: "Frontend Developer Intern",
      company: "Scaleque Ites Private Limited",
      description: [
        "Developed and deployed multiple small projects in frontend",
        "Led WordPress theme customizations and plugin developments"
      ]
    }
  ];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`${styles.timelineItem} ${
                index % 2 === 0 ? styles.rightItem : styles.leftItem
              }`}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineCard}>
                <div className={styles.cardContent}>
                  <span className={styles.date}>{exp.date}</span>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.company}>{exp.company}</p>
                  <ul className={styles.description}>
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
