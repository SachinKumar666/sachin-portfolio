import React from "react";
import "./Style/About.css";
import AboutPhoto from "../assets/images/image-169.png";
import SmallAboutPhoto from "../assets/images/myimagebg2.png";

const About = () => {
  return (
    <section id="about">
      <div className="about-main">
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">Get to know me better</p>
        </div>

        <div className="about-container">
          {/* For desktop view */}
          <div className="about-image desktop-image">
            <img src={AboutPhoto} alt="Sachin Kumar" />
            <div className="image-overlay"></div>
          </div>
 
          <div className="mobile-header-container">
            <div className="about-image">
              <img src={SmallAboutPhoto} alt="Sachin Kumar" />
              <div className="image-overlay"></div>
            </div>
            <h3 className="mobile-name-heading">Hi, I'm Sachin Kumar</h3>
          </div>

          <div className="about-description"> 
            <h3 className="desktop-heading">Hi, I'm Sachin Kumar</h3>
            
            <p>
              A passionate frontend developer with a keen eye for creating elegant,
              responsive, and user-friendly websites. With expertise in React.js
              and modern web technologies, I transform ideas into seamless digital
              experiences.
            </p>

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