/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from './Navbar.module.css';
import { getImageUrl } from "../../utils";
import { Bio } from "../data/constants";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Prev State:', menuOpen);
    setMenuOpen((prev) => {
      console.log('New State:', !prev);
      return !prev;
    });
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        <span style={{ color: '#0ebbfd', display: 'inline' }}>&lt;</span>Sanskruti
        <span style={{ color: '#0ebbfd', display: 'inline' }}>/</span>
        <span style={{ color: '#0ebbfd', display: 'inline' }}>&gt;</span>
      </a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
        </ul>
      </div>

      {/* GitHub Button */}
      <a
        href={Bio.github} // Replace with your GitHub link
        target="_blank"
        rel="noopener noreferrer"
        className={styles.githubBtn}
      >
        GitHub
      </a>
    </nav>
  );
};
