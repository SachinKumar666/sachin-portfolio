import React, { useState } from "react";
import "./Style/Navbar.css";
import profile from "../assets/Images/profile-pic.png";

const resumeUrl = "/resume/Sachin-Kumar-Resume.pdf";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="navbar-profile" onClick={() => window.location.href = "#hero"}>
          <img src={profile} alt="Profile" className="profile-image" />
          Sachin
        </div>

        <div className="navbar-links">
          {[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Projects", id: "projects" },
            { name: "Designs", id: "designs" },
          ].map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-link">
              <span>{item.name}</span>
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <button className="resume-button" onClick={openPopup}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z"
              clipRule="evenodd"
            />
          </svg>
          Resume
        </button>
      </nav>

      {/* Resume Popup Modal */}
      {showPopup && (
        <div className="resume-popup">
          <div className="popup-content">
            {/* Close Button */}
            <button className="close-btn" onClick={closePopup}>&times;</button>

            {/* PDF Viewer */}
            <iframe src={resumeUrl} className="resume-frame" title="Resume"></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
