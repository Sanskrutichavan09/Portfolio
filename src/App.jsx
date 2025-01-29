import styles from "./App.module.css";

import { Skills } from './components/Skills/Skills';
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Education } from './components/Education/Education';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    
    <div className={styles.App}>
      {/* Glowing animation as background */}
     
      
      {/* Content sections */}
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
