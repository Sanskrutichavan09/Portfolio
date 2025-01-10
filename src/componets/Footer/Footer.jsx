/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Footer.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.logo}>Sanskruti Chavan</div>
        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/in/sanskruti-chavan-web-developer/" className={styles.socialMediaIcon} target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/Sanskrutichavan09" className={styles.socialMediaIcon} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href={`mailto:sanskrutichavan45@gmail.com`} className={styles.socialMediaIcon}>
            <SiGmail />
          </a>
        </div>
        <nav className={styles.nav}>
          <a href="#About" className={styles.navLink}>About</a>
          <a href="#Skill" className={styles.navLink}>Skills</a>
          <a href="#Experience" className={styles.navLink}>Experience</a>
          <a href="#Projects" className={styles.navLink}>Projects</a>
          <a href="#Education" className={styles.navLink}>Education</a>
        </nav>
        <p className={styles.copyright}>
          &copy; 2024 Sanskruti Chavan. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
