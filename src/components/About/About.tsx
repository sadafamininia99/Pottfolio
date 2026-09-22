import { Container } from "./styles";
import Avocado from "../../../src/assets/avoco.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <p>
            Hi, I'm Sadaf Amininia — a passionate Frontend Developer with 5+
            years of experience building modern, responsive, and user-focused
            web applications.
          </p>

          <p>
            I specialize in JavaScript, TypeScript, React, and modern frontend
            development. I enjoy turning complex ideas and designs into clean,
            intuitive, and high-quality digital experiences.
          </p>

          <p>
            I'm always curious about new technologies and enjoy learning,
            solving challenging problems, and improving the way I build
            products. I also value clean code, reusable components, teamwork,
            and creating experiences that are both visually appealing and
            practical.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={200}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>

        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={100}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={150}>
              <img src={typescriptIcon} alt="TypeScript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={200}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={250}>
              <img src={htmlIcon} alt="HTML5" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={300}>
              <img src={cssIcon} alt="CSS3" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={350}>
              <img src={vueIcon} alt="Vue.js" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={400}>
              <img src={boostrapIcon} alt="Bootstrap" />
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight">
          <img src={Avocado} alt="Avocado illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
