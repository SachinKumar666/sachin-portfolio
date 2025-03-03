import React, { useEffect, useRef, useState } from "react";
import "./Style/Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  const [scrollDirection, setScrollDirection] = useState("left");
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef(null);

  const roles = ["Developer", "Designer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  // Track scroll direction
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setScrollDirection("left"); // Scrolling down
      } else {
        setScrollDirection("right"); // Scrolling up
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;  
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pause/resume scrolling on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <>
      <div className="hero-container" id="hero">
        <div
          className="hero-content"
        >
          <h1 className="hero-heading-one">Hello!</h1>
          <h1 className="hero-heading">I'm <span>Sachin</span></h1>
          <p className="hero-subheading">Welcome to my slice of the web!</p>
          <p className="hero-description">
            I'm a junior frontend developer and designer based in India, aiming
            to leave a lasting impression and drive innovation in the
            ever-evolving world of software development.
          </p>
          <div className="hero-icons">
            <a
              href="https://www.instagram.com/sachin_1.0.1_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-icon"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://github.com/SachinKumar666"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-icon"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/sachin-kumar-08324424a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-icon"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>

      <div
        className="hero-skills" id='skills'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={marqueeRef}
          className={`skills-marquee ${scrollDirection} ${
            isPaused ? "paused" : ""
          }`}
        >
          {Array(2) // Duplicate content for infinite scroll effect
            .fill()
            .map((_, i) => (
              <React.Fragment key={i}>
                <span>Html5</span>
                <span className="separator">X</span>
                <span>Css3</span>
                <span className="separator">X</span>
                <span>JavaScript</span>
                <span className="separator">X</span>
                <span>Python</span>
                <span className="separator">X</span>
                <span>SQL</span>
                <span className="separator">X</span>
                <span>React</span>
                <span className="separator">X</span>
                <span>Tailwind</span>
                <span className="separator">X</span>
                <span>Bootstrap</span>
                <span className="separator">X</span>
                <span>Figma</span>
                <span className="separator">X</span>
                <span>Git & Github</span>
                <span className="separator">X</span>
                <span>Excel</span>
                <span className="separator">X</span>
                <span>VS Code</span>
                <span className="separator">X</span>
              </React.Fragment>
            ))}
        </div>
      </div>
    </>
  );
};

export default Hero;