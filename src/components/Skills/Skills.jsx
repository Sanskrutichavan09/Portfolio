/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Skills.module.css";

export const Skills = () => {
  const skillsData = [
    {
      title: "Frontend Development",
      icon: "/public/assets/about/React.webp",
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
     
    },
    {
      title: "Backend Development",
      icon: "/public/assets/about/backend.png",
      skills: ["Node.js", "Express.js", "MongoDB"],
      
    },
    {
      title: "Other Skills",
      icon: "/public/assets/about/other.png",
      skills: ["Java", "Networking (Basic)", "Cloud (Basic)", "WordPress"],
     
    },
  ];

  return (
    <section className={styles.container} id="Skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.cards}>
        {skillsData.map((category, id) => (
          <div key={id} className={styles.card}>
            <img
              src={category.icon}
              alt={category.title}
              className={styles.icon}
              style={{ backgroundColor: category.iconColor }}
            />
            <h3 className={styles.cardTitle}>{category.title}</h3>
            <div className={styles.skillTags}>
              {category.skills.map((skill, index) => (
                <span key={index} className={styles.tag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
