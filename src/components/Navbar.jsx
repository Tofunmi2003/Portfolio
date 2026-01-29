import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#" className="navbar-logo">Portfolio.</a>

                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <a href="#hero" className="navbar-item" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#projects" className="navbar-item" onClick={() => setIsOpen(false)}>Projects</a>
                    <a href="#skills" className="navbar-item" onClick={() => setIsOpen(false)}>Skills</a>
                    <a href="#contact" className="navbar-item" onClick={() => setIsOpen(false)}>Contact</a>
                </div>

                <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
