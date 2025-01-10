
import styles from "./Project.module.css";
import ProjectCard from "../../Components/ProjectCard/projectCard";
import SimonSayGame from '../../../public/assets/SimonSayGame.png'
import TODO from '../../../public/assets/TODO.png'
import Burger from '../../../public/assets/Burger.png'
import MagicFlix from '../../../public/assets/MagicFlix.png'
import Ecommerence from '../../../public/assets/Ecommerence.png'
import { motion } from "framer-motion";
import ComponentTitle from "../ContainerTitle/ContainerTitle";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import portimg from '../../../public/assets/portimg.png'

function Project() {
  return (
    <div id="project" >
   
      <Circle right={"-6rem"} top={"-8rem"} />
      <MainContainer>
        <div className={styles.project_page_component} >
          <ComponentTitle title={"My projects"} />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
            className={styles.projects_component}
          >
            <ProjectCard
              previewLink={"https://677e4d90a377af0b034cb480--cheerful-seahorse-4bcd2d.netlify.app/"}
              githubLink={
                "https://github.com/Sanskrutichavan09/Burger-Website"
              }
              projectName={"Burger Website"}
              projectDetails={
                "The Burger Website is an interactive, visually appealing, and user-friendly platform where users can explore and customize their burger orders. It includes various features like a burger menu, a customization section, a shopping cart, and an order summary page. The project uses HTML, CSS, and JavaScript to bring it all together, focusing on providing a seamless, engaging experience for the user."
              }
              
              demoImage={Burger}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
             <ProjectCard
              previewLink={"https://677e4e445bc2625576b6b7d6--cute-moxie-a07daa.netlify.app/"}
              githubLink={"https://github.com/Sanskrutichavan09/TODOList"}
              projectName={"TO DO List"}
              projectDetails={
                "The To-Do List is a simple yet effective task management tool that allows users to add, remove, and mark tasks as completed. This project uses HTML, CSS, and JavaScript to create an interactive web application for organizing daily tasks, helping users stay productive and organized."
              }
              
              demoImage={TODO}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            <ProjectCard
              previewLink={"https://zingy-cranachan-622c25.netlify.app/"}
              githubLink={"https://github.com/Sanskrutichavan09/Simonsay-Game"}
              projectName={"SimonSayGame"}
              projectDetails={
                "The Simon Says game is a memory-based game where players must remember and replicate a sequence of button flashes. Each round adds a new button to the sequence, increasing the challenge. Players lose if they press the buttons in the wrong order."
              }
              demoImage={SimonSayGame}
              skill_img={[
                
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                
              ]}
            />

           
            
           <ProjectCard
              previewLink={""}
              githubLink={
                ""
              }
              projectName={"MagicFlix-On Going"}
              projectDetails={
                "MagicFlix is a Netflix clone built with React.js, offering features like browsing movies, watching trailers, and viewing detailed movie information. It provides an engaging, seamless user interface with dynamic content and smooth navigation."
              }
              
              demoImage={MagicFlix}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
           <ProjectCard
              previewLink={""}
              githubLink={
                ""
              }
              projectName={"E-commerence-On Going"}
              projectDetails={
                "An e-commerce website is an online platform that enables businesses to sell products or services to customers via the internet. It includes features such as product catalogs, shopping carts, secure payment gateways, and order tracking, providing a seamless shopping experience."
              }
              
              demoImage={Ecommerence}
              skill_img={[
              "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
             <ProjectCard
              previewLink={""}
              githubLink={""}
              projectName={"portfolio"}
              projectDetails={
                "A portfolio website built using React.js is a highly interactive and dynamic platform for showcasing an individual's skills, experience, projects, and achievements. "
              }
              demoImage={ portimg}
             
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
           
           
           
          </motion.div>
        </div>
      </MainContainer>
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        className="component_container"
      ></motion.div>
    </div>
  );
}

export default Project;