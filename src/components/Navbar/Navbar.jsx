/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        <span className={styles.colorText}>&lt;Sanskruti</span>
        <span className={styles.colorText}>/&gt;</span>
      </a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Project</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
        </ul>
      </div>
      <a href="https://github.com/Sanskrutichavan09" target="_blank" rel="noopener noreferrer" className={styles.githubBtn}>
        GitHub
      </a>
    </nav>
  )
}

