import React from "react";
import {
  Heart,
  Mail,
  Phone,
  Linkedin,
  Github,
  Twitter,
  MapPin,
  Instagram,
} from "lucide-react";
import "./Style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Contact Section */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Me</h3>
            <div className="contact-links">
              <a href="mailto:your.email@example.com" className="contact-item">
                <Mail size={18} />
                <span>sachinkumarsk10123@gmail.com</span>
              </a>
              <a href="tel:+9771190337" className="contact-item">
                <Phone size={18} />
                <span>+91 9771190337</span>
              </a>
              <div className="contact-item">
                <MapPin size={18} />
                <span>Buxar, Bihar, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          {/* <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="quick-links">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li><a href="#about">About</a></li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#designs">Designs</a>
              </li>
            </ul>
          </div> */}

          {/* Social Links Section */}
          {/* <div className="footer-section">
            <h3 className="footer-title">Connect With Me</h3>
            <div className="social-links">
              <a
                href="https://github.com/SachinKumar666"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Github size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/sachin-kumar-08324424a/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="https://www.instagram.com/sachin_1.0.1_/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div> */}

<div>
  <div className="glass-card-wrapper">
    <a
      href="https://www.instagram.com/sachin_1.0.1_/"
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card earn-card"
      data-text="Instagram"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 50 50"
      >
        <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
      </svg>
    </a>

    <a
      href="https://www.linkedin.com/in/sachin-kumar-08324424a/"
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card code-card"
      data-text="LinkedIn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
      >
        <path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z"></path>
      </svg>
    </a>

    <a
      href="https://github.com/SachinKumar666"
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card github-card"
      data-text="Github"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 32 32"
      >
        <path
          fill-rule="evenodd"
          d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
        ></path>
      </svg>
    </a>
  </div>
</div>

        </div>

        {/* Copyright Line */}
        <div className="copyright">
          <p>
            Designed and Developed with{" "}
            <Heart size={16} className="heart-icon" /> by
            <span className="author-name"> Sachin Kumar</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
