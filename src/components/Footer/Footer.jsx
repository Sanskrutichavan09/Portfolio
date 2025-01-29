/* eslint-disable no-unused-vars */
import React from "react"
import styles from "./Footer.module.css"
import { Github, Linkedin, Mail } from "lucide-react"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = ["About", "Skills", "Experience", "Projects", "Education"]

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h2 className={styles.name}>Sanskruti Chavan</h2>

        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/sanskruti-chavan-web-developer/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/Sanskrutichavan09" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <Github size={24} />
          </a>
          <a href="mailto:sanskrutichavan45@gmail.com" className={styles.socialLink}>
            <Mail size={24} />
          </a>
        </div>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className={styles.navLink}>
              {link}
            </a>
          ))}
        </nav>

        <p className={styles.copyright}>© {currentYear} Sanskruti Chavan. All rights reserved.</p>
      </div>
    </footer>
  )
}

