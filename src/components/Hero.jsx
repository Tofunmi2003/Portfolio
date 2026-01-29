import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import './Hero.css';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section id="hero" className="hero-section">
            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.p variants={itemVariants} className="hero-greeting">Hi, my name is</motion.p>
                <motion.h1 variants={itemVariants} className="hero-name big-heading">{personalInfo.name}.</motion.h1>
                <motion.h2 variants={itemVariants} className="hero-role big-heading">I build things for the web.</motion.h2>
                <motion.p variants={itemVariants} className="hero-description">
                    {personalInfo.bio}
                </motion.p>
                <motion.div variants={itemVariants}>
                    <a href="#projects" className="btn-primary">Check out my course!</a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
