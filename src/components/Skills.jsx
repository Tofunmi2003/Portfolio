import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h2 className="numbered-heading">Skills & Technologies</h2>
            <div className="skills-container">
                {skills.map((skillGroup, index) => (
                    <motion.div
                        key={index}
                        className="skill-category"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3>{skillGroup.category}</h3>
                        <ul className="skills-list">
                            {skillGroup.items.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
