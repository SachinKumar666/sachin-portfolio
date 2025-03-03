import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ProjectPopup = ({ project, onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      popupRef.current.classList.add('show');
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    popupRef.current.classList.remove('show');
    setTimeout(onClose, 300); 
  };

  return (
    <div className="project-popup-overlay" ref={popupRef}>
      <div className="project-popup-content">
        <div className="project-popup-buttons">
          <button className="project-popup-close" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <a 
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-popup-external"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
        <iframe 
          src={project.liveLink} 
          title={project.title} 
          className="project-popup-iframe"
        />
      </div>
    </div>
  );
};

export default ProjectPopup;
