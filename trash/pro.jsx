import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import ProjectPopup from "./ProjectPopup";
import "./Style/Projects.css";
import Netflix from "../assets/projects/netflix-clone.png";

const projectsData = [
  {
    title: "Netflix Home Page Clone",
    description:
      "A Netflix Home page clone website built with React. Features include user profile, movies catalog.",
    image: { Netflix },
    tools: ["Html", "CSS", "JavaScript", "Figma", "TMDB API"],
    githubLink: "https://github.com/username/ecommerce-project",
    liveLink: "https://sachinkumar666.github.io/Netflix-Home-Page-Clone/",
  },
  {
    title: "Music Aoplication",
    description:
      "A music application dashboard that aggregates music from multiple platforms.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TXZEU80aGCgEDtZerpWL73jh8dbaC8.png",
    tools: ["Html", "CSS", "JavaScript", "Material-UI"],
    githubLink: "https://github.com/username/social-dashboard",
    liveLink: "https://sachinkumar666.github.io/Muzic-/",
  },
  {
    title: "ChocoBite Canteen",
    description:
      "A responsive canteen application with order food support. Provides current status.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TXZEU80aGCgEDtZerpWL73jh8dbaC8.png",
    tools: ["Html", "CSS", "JavaScript", "Bootstrap", "Figma"],
    githubLink: "https://github.com/username/weather-app",
    liveLink: "https://sachinkumar666.github.io/Canteen/",
  },
  {
    title: "SutterBug Sketch",
    description:
      "A comprehensive sketch application system with real-time collaboration features, drag-and-drop interface, drowing tools.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TXZEU80aGCgEDtZerpWL73jh8dbaC8.png",
    tools: ["Html", "CSS", "JavaScript"],
    githubLink: "https://github.com/username/task-manager",
    liveLink: "https://sachinkumar666.github.io/Sutterbug-Sketch/",
  },
];

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);
  const timelinePointRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.2,
        root: null,
      }
    );

    const updateTimelinePoint = () => {
      if (
        !timelinePointRef.current ||
        !sectionRef.current ||
        projectRefs.current.length === 0
      )
        return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const viewportMiddle = window.innerHeight / 2;

      // Find the project that's currently in view
      let activeProjectIndex = -1;
      projectRefs.current.forEach((projectRef, index) => {
        if (!projectRef) return;

        const projectRect = projectRef.getBoundingClientRect();
        const projectMiddle = projectRect.top + projectRect.height / 2;

        if (projectMiddle < viewportMiddle && projectMiddle > 0) {
          activeProjectIndex = index;
        }
      });

      if (activeProjectIndex >= 0) {
        const activeProject = projectRefs.current[activeProjectIndex];
        const projectRect = activeProject.getBoundingClientRect();
        const projectMiddle =
          projectRect.top + projectRect.height / 2 - sectionTop;
        timelinePointRef.current.style.top = `${projectMiddle}px`;
      } else if (activeProjectIndex === -1 && sectionRect.top < 0) {
        // If no project is in view but we've scrolled past the section start
        timelinePointRef.current.style.top = `${viewportMiddle - sectionTop}px`;
      } else {
        // If we haven't reached the projects yet, keep the point at the top
        timelinePointRef.current.style.top = "20rem";
      }
    };

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    window.addEventListener("scroll", updateTimelinePoint);
    window.addEventListener("resize", updateTimelinePoint);

    // Initial position
    setTimeout(updateTimelinePoint, 100);

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      window.removeEventListener("scroll", updateTimelinePoint);
      window.removeEventListener("resize", updateTimelinePoint);
    };
  }, []);
  const handleProjectClick = (project, e) => {
    e.preventDefault();
    setSelectedProject(project);
  };


  
  return (
    <div className="projects-section" id="projects" ref={sectionRef}>
      <div className="section-header">
        <h2>Projects</h2>
      </div>
      <div className="timeline">
        <div className="timeline-line">
          <div className="timeline-point" ref={timelinePointRef}></div>
        </div>
      </div>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div
            key={project.title}
            ref={(el) => (projectRefs.current[index] = el)}
            className={`project-card ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="project-image" onClick={(e) => handleProjectClick(project, e)}>
              <img src={project.image || "/placeholder.svg"} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a 
                    href={project.liveLink} 
                    onClick={(e) => handleProjectClick(project, e)}
                    aria-label="Preview project"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View GitHub repository"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tools">
                {project.tools.map((tool) => (
                  <span key={tool} className="tool-tag">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectPopup
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          projectUrl={selectedProject.liveLink}
          projectTitle={selectedProject.title}
        />
      )}
    </div>
  );
};

export default ProjectSection;