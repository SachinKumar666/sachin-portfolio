import React from "react";
import "./Style/About.css";
import AboutPhoto from "../assets/images/image-169.png";

const About = () => {
  return (
    <section id="about">
      <div className="about-main">
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">Get to know me better</p>
        </div>

        <div className="about-container">
          <div className="about-image">
            <img src={AboutPhoto} alt="Sachin Kumar" />
            <div className="image-overlay"></div>
          </div>

          <div className="about-description">
            <h3>Hi, I'm Sachin Kumar</h3>
            <p>
              A passionate frontend developer with a keen eye for creating elegant,
              responsive, and user-friendly websites. With expertise in React.js
              and modern web technologies, I transform ideas into seamless digital
              experiences.
            </p>
            {/* <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge with
              the developer community.
            </p> */}

           

            <div className="about-buttons">
              <button className="about-btn hire-btn">
                <span>Contact Me</span>
                <i className="fas fa-arrow-right"></i>
              </button>
              <button className="about-btn resume-btn">
                <span>Resume</span>
                <i className="fas fa-download"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
