import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2 className="numbered-heading">Some Things I've Built</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        className="project-card"
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="project-content">
                            <header>
                                <div className="project-top">
                                    <div className="folder-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                    </div>
                                    <div className="project-links">
                                        <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                                            <FaGithub />
                                        </a>
                                        <a href={project.link} aria-label="External Link" target="_blank" rel="noopener noreferrer">
                                            <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>
                                <h3 className="project-title">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                                </h3>
                                <div className="project-description">
                                    <p>{project.description}</p>
                                </div>
                            </header>
                            <footer>
                                <ul className="project-tech-list">
                                    {project.tech.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                            </footer>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
