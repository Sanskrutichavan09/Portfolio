/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";


export const Hero = () => {
  return (
    <>
     
    <section className={styles.container} id="about">
      
           <div className={styles.content}>
          
        <h1 className={styles.title}>
          Hello, I&rsquo;m
          <span className={styles.name}>Sanskruti Chavan</span>
        </h1>
        <div className={styles.description}>
          <p className={styles.role}>
            I&rsquo;m a{" "}
            <span className={styles.highlight}>Full Stack Developer</span>
          </p>
          <p className={styles.bio}>
            I am a creative and detail-oriented frontend developer with a passion for crafting seamless and engaging user interfaces. With a strong focus on delivering intuitive and responsive web experiences, I am proficient in HTML, CSS, JavaScript, and modern frameworks like React. I enjoy transforming complex ideas into user-friendly designs and am committed to continuous learning to stay updated with the latest web technologies.
          </p>
        </div>
        <a
          href="https://drive.google.com/file/d/1gtfKgX_rRJVBPnwSQ7T4TjUM3R7IW_jU/view" // Replace with your actual resume URL
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeBtn}
        >
          Check Resume
        </a>
      </div>

      <div className={styles.heroImgContainer}>
      
        <div className={styles.imgBorder}>
          <img
            src={getImageUrl("hero/heroImage.png") || "/placeholder.svg"}
            alt="Hero image of Sanskruti"
            width={400}
            height={400}
            className={styles.heroImg}
          />
        </div>
      </div>
    </section>
    </>
  );
};
