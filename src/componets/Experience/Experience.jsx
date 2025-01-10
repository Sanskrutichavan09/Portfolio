import ActionBox from "../../components/ActionBox/ActionBox";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";

import style from "./Experience.module.css";
import ComponentTitle from "../ContainerTitle/ContainerTitle";

// import { motion } from "framer-motion";

function Experience() {
  return (
    <div id="experience">
      <Circle bottom={"19rem"} right={"-25rem"} />
      <MainContainer>
        <div>
        <ComponentTitle title={"Experience"} />
          <div className={style.timeline_container}>
            
            <div className={style.timeline_box}>
              <div
                className={`${style.action_container} ${style.left_container}`}
              >

               <ActionBox
                  isleft={false}
                  timeline={"October 2024"}
                  timeline_title={"React developer intern"}
                  location={"Adiasquare Software Solutions OPC Pvt.Ltd."}
                  details={[
                    "• Learned React.js during internship and built interactive UI components",
                    "• Worked on improving UI responsiveness with CSS and Tailwind CSS",
                    
                  ]}
                />
                
              </div>
              <div
                className={`${style.action_container} ${style.right_container}`}
              >

              <ActionBox
                  isleft={true}
                  timeline={"February 2024"}
                  timeline_title={"Frontend Developer Intern"}
                  location={"Scaleque Ites Private Limited"}
                  details={[
                    "• Developed and deployed multiple small projects in frontend.",
                    "• Led WordPress theme customizations and plugin developments"
                    

                  ]}
                />
                
              </div>
              
            </div>
          </div>
         
         
          
        </div>
      </MainContainer>
    </div>
  );
}

export default Experience;
