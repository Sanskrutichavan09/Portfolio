/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import styles from './Projects.module.css'; // Adjust the path to match where your CSS file is located
import { ProjectCard } from './ProjectCard';  // Adjust the path based on your file structure

export const Projects = () => {
  const projects = [

    {
      title: "AiTripPlanner",
      image: "/public/assets/Aitrip.jpeg",
      description: "AitripPlanner is a React.js & Firebase travel app that creates AI-powered itineraries with real-time data. 🚀✨",
      skills: ["html", "css", "javascript"],
      iconImages: [
        "/public/assets/icons/reactjs.png",
        "/public/assets/icons/CSS.png",
        "/public/assets/icons/javascript.png",
        "/public/assets/icons/firebase.png",
      ],
      Github: "https://github.com/Sanskrutichavan09/Ai-Trip-Planner",
      Live: "https://ai-trip-planner-gray-nine.vercel.app/",
    },
    {
      title: "Burger Website",
      image: "/public/assets/Burger.png",
      description: "A modern burger restaurant website with an online ordering system",
      skills: ["html", "css", "javascript"],
      iconImages: [
        "/public/assets/icons/Html.webp",
        "/public/assets/icons/CSS.png",
        "/public/assets/icons/javascript.png",
      ],
      Github: "https://github.com/Sanskrutichavan09/Burger_Website",
      Live: "#",
    },
    {
      title: "TO DO List",
      image: "/public/assets/TODO.png",
      description: "To-Do List: A simple task manager using HTML, CSS, and JavaScript.",
      skills: ["react", "html", "css", "javascript"],
      iconImages: [
        "/public/assets/icons/Html.webp",
        "/public/assets/icons/CSS.png",
        "/public/assets/icons/javascript.png",
      ],
      Github: "https://github.com/Sanskrutichavan09/TODOList",
      Live: "https://cute-moxie-a07daa.netlify.app/",
    },
    {
      title: "SimonSayGame",
      image: "/public/assets/SimonSayGame.png",
      description: "Interactive memory game built with modern web technologies",
      skills: ["html", "css", "javascript"],
      iconImages: [
       "/public/assets/icons/Html.webp",
        "/public/assets/icons/CSS.png",
        "/public/assets/icons/javascript.png",
      ],
      Github: "https://github.com/Sanskrutichavan09/Simonsay-Game",
      Live: "https://zingy-cranachan-622c25.netlify.app/",
    },
    
    
    
  ];

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>My projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
