import React from "react";
import "./Projects.css";

function Project() {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description:
        "A modern React-based portfolio website showcasing my work and skills",
      technologies: ["React", "Redux", "React Router", "CSS3"],
      features: [
        "Responsive design for all devices",
        "Dark/Light theme switcher",
        "Dynamic routing with React Router",
        "Contact form with validation",
        "Smooth animations and transitions",
      ],
      githubLink: "https://github.com/Ganesh9318/portfolio",
      // liveLink: "https://your-portfolio-url.com",
      // image: "/images/portfolio-preview.png",
    },
    // Add more projects here
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div> */}
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="project-links">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> View Code
                </a>
                {/* <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
