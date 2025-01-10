/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Skill.module.css";
import { getImageUrl } from "../../utils";
import { skills } from "../data/constants"; 
import ComponentTitle from "../ContainerTitle/ContainerTitle";

export const Skill = () => {
  return (
    <section className={styles.container} id="skills">
      <ComponentTitle title={"Skills"} />
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          {skills.map((skill, index) => (
            <li key={`skill-${index}`} className={styles.aboutItem}>
              <img
                src={getImageUrl(`about/${skill.icon}`)} // Use the specific icon for each skill
                alt={`${skill.title} icon`}
                className={styles.skillIcon} // Add CSS class for styling
              />
              <div className={styles.aboutItemText}>
                <h3>{skill.title}</h3>
                <ul className={styles.skillList}>
                  {skill.skills.map((item, index_x) => (
                    <li key={`skill-item-${index_x}`} className={styles.skillItem}>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
