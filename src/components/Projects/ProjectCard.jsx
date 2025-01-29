/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={project.image} alt={project.title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>

        {/* Skill Icons */}
        <div className={styles.iconContainer}>
          {project.iconImages.map((icon, index) => (
            <img key={index} src={icon} alt={`Skill ${index}`} className={styles.skillIcon} />
          ))}
        </div>

        {/* Buttons */}
        <div className={styles.links}>
          <a href={project.demo} className={styles.demoLink}>Github</a>
          <a href={project.source} className={styles.sourceLink}>Live</a>
        </div>

        {/* Hover Description */}
        <div className={styles.description}>
          {project.description}
        </div>
      </div>
    </div>
  );
};
