/* eslint-disable no-unused-vars */
import React from "react";
import Typewriter from "typewriter-effect";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { Bio } from "../data/constants";

// Import custom icons
import jsIcon from "../../../public/assets/icons/javascript.png"; // Custom icon for JavaScript
import htmlIcon from "../../../public/assets/icons/Html.webp"; // Custom icon for HTML
import cssIcon from "../../../public/assets/icons/CSS.png";
import reactIcon from "../../../public/assets/icons/reactjs.png"; // Custom icon for CSS
import mongodbIcon from "../../../public/assets/icons/mongodb.webp"; // Custom icon for MongoDB
import nodeIcon from "../../../public/assets/icons/nodejs.png"; // Custom icon for Node.js
import javaIcon from "../../../public/assets/icons/java.png"; // Custom icon for Java
 // Custom icon for React.js

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.backgroundIcons}>
        <div className={styles.icon}>
          <img src={reactIcon} alt="React.js" />
        </div>
        <div className={styles.icon}>
          <img src={htmlIcon} alt="HTML" />
        </div>
        <div className={styles.icon}>
          <img src={cssIcon} alt="CSS" />
        </div>
        <div className={styles.icon}>
          <img src={mongodbIcon} alt="MongoDB" />
        </div>
        <div className={styles.icon}>
          <img src={nodeIcon} alt="Node.js" />
        </div>
        <div className={styles.icon}>
          <img src={jsIcon} alt="JavaScript" />
        </div>
        <div className={styles.icon}>
          <img src={javaIcon} alt="Java" />
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Hello, I&apos;m <br /> {Bio.name}
        </h1>
        <p className={styles.description}>
          I&apos;m a{" "}
          <span style={{ color: "#0ebbfd", fontWeight: "bold" }}>
            <Typewriter
              options={{
                strings: Bio.roles,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <p>{Bio.description}</p>
        </p>

        <div>
          <a href={Bio.resume} className={styles.contactBtn}>
            Check Resume
          </a>
        </div>
      </div>

      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      <div className="glow-effect"></div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
