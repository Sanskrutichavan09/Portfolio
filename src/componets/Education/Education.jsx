import ActionBox from "../../components/ActionBox/ActionBox";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import style from "./Education.module.css";
import ComponentTitle from "../ContainerTitle/ContainerTitle";

const EDUCATION_DETAILS = [
  {
    timeline: "2021-2024",
    title: "Bachelor of Technology - BTech, Computer Science",
    location: "Sandipani Technical Campus, Latur",
    details: "Completed B.Tech with a CGPA of 7.14, specializing in Cloud Computing, Networking, and related technologies.",
    isLeft: true,
  },
  {
    timeline: "2019-2021",
    title: "Diploma Polytechnic - (MSBTE) Computer Science",
    location: "Gramin Technical and Management Campus, Nanded",
    details: "Completed my Diploma from State Board with 83% from Gramin Technical Campus, Nanded.",
    isLeft: false,
  },
];

function Education() {
  return (
    <section id="education">
      <Circle bottom={"19rem"} right={"-25rem"} />
      <MainContainer>
        <div>
          <ComponentTitle title={"Education"} />
          <div className={style.timeline_container}>
            <div className={style.timeline_box}>
              {EDUCATION_DETAILS.map((item, index) => (
                <article
                  key={index}
                  className={`${style.action_container} ${item.isLeft ? style.left_container : style.right_container}`}
                >
                  <ActionBox
                    isleft={item.isLeft}
                    timeline={item.timeline}
                    timeline_title={item.title}
                    location={item.location}
                    details={item.details}
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default Education;
