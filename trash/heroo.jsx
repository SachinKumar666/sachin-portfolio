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

  const roles = ["Developer", "Designer"];  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);


  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
      <div className="hero-container">
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          backgroundColor: isHovered ? "#fd5b20" : "#FF5722", 
          mixBlendMode: isHovered ? "difference" : "normal",  
        }}
      ></div>

      <div
        className="hover-area"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
         
      </div>
      <div
        className="hero-content"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
          <h1 className="hero-heading-one">Hello,</h1>
          <h1 className="hero-heading">I'm Sachin!</h1>
          {/* <p className="hero-subheading-first">
            Web <span className="role">{roles[currentRoleIndex]}</span>
          </p>{" "} */}
          <p className="hero-subheading">Welcome to my slice of the web!</p>
          <p className="hero-description">
            I'm a junior frontend developer and designer based in Bihar, aiming
            to leave a lasting impression and drive innovation in the
            ever-evolving world of software development.
          </p>
          <div className="hero-icons">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-icon"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-icon"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://linkedin.com"
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
        className="hero-skills"
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
              </React.Fragment>
            ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
