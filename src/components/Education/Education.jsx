/* eslint-disable no-unused-vars */
import React from "react"
import styles from "./Education.module.css"

export const Education = () => {
  const education = [
    {
      period: "2021-2024",
      degree: "Bachelor of Technology - BTech, Computer Science",
      institution: "Sandipani Technical Campus, Latur",
      description: "Completed B.Tech with a CGPA of 7.14, specializing in Cloud Computing, Networking, and related technologies."
    },
    {
      period: "2019-2021",
      degree: "Diploma Polytechnic - (MSBTE) Computer Science",
      institution: "Gramin Technical and Management Campus, Nanded",
      description: "Completed my Diploma from State Board with 83% from Gramin Technical Campus, Nanded."
    }
  ]

  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.timeline}>
        {education.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
          >
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.period}>{item.period}</div>
              <h3 className={styles.degree}>{item.degree}</h3>
              <div className={styles.institution}>{item.institution}</div>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
