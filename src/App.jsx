/* eslint-disable no-unused-vars */
// Import React and other third-party libraries
import React from "react";

// Import components
import SparklingCursor from "./components/SparkingCurser/SparkingCurser";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { Skill } from "./components/Skill/Skill";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";

import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

// Import styles
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.App}>
      {/* Add sparkling cursor effect */}
      <SparklingCursor />

      {/* Main sections */}
      <Navbar />
      <Hero />
      <Skill />
      <Experience />
      <Project />
      
      <Education />
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
