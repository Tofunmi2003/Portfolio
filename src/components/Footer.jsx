import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { personalInfo } from '../data';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="social-links">
                {personalInfo.socials.github && (
                    <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                )}
                {personalInfo.socials.linkedin && (
                    <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                )}
                {personalInfo.socials.twitter && (
                    <a href={personalInfo.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter />
                    </a>
                )}
            </div>
            <div className="footer-credit">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    Designed & Built by {personalInfo.name}
                </a>
            </div>
        </footer>
    );
};

export default Footer;
