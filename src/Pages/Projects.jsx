import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "./Style/Projects.css";
import Netflix from "../assets/projects/netflix-clone.png";
import Music from "../assets/projects/music2.png";
import Canteen from "../assets/projects/canteenImg.png";
import Sutterbug from "../assets/projects/sutterbug-sketch.png";
import ProjectPopup from "../components/ProjectPopup";

const projectsData = [
  {
    title: "Netflix Home Page Clone",
    description:
      "A Netflix Home page clone website built with React. Features include user profile, movies catalog.",
    image: Netflix,
    tools: ["Html", "CSS", "JavaScript", "Figma", "TMDB API"],
    githubLink: "https://github.com/username/ecommerce-project",
    liveLink: "https://sachinkumar666.github.io/Netflix-Home-Page-Clone/",
  },
  {
    title: "Music Application",
    description:
      "A music application dashboard that aggregates music from multiple platforms.",
    image: Music,
    tools: ["Html", "CSS", "JavaScript", "Material-UI"],
    githubLink: "https://github.com/username/social-dashboard",
    liveLink: "https://sachinkumar666.github.io/Muzic-/",
  },
  {
    title: "ChocoBite Canteen",
    description:
      "A responsive canteen application with order food support. Provides current status.",
    image: Canteen,
    tools: ["Html", "CSS", "JavaScript", "Bootstrap", "Figma"],
    githubLink: "https://github.com/username/weather-app",
    liveLink: "https://sachinkumar666.github.io/Canteen/",
  },
  {
    title: "SutterBug Sketch",
    description:
      "A comprehensive sketch application system with real-time collaboration features, drag-and-drop interface, drowing tools.",
    image: Sutterbug,
    tools: ["Html", "CSS", "JavaScript"],
    githubLink: "https://github.com/username/task-manager",
    liveLink: "https://sachinkumar666.github.io/Sutterbug-Sketch/",
  },
];

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);
  const timelinePointRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

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
        timelinePointRef.current.style.top = `${viewportMiddle - sectionTop}px`;
      } else {
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
            <div
              className="project-image"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
              />
            </div>

            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  aria-label="View project in popup"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                  <span className="link-text">Preview</span>
                </button>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View GitHub repository"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span className="link-text">Source</span>
                </a>
              </div>
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
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectSection;
