import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="contact-content"
            >
                <div className="numbered-heading contact-heading">What's Next?</div>
                <h2 className="title">Get In Touch</h2>
                <p>
                    I'm currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a href={`mailto:${personalInfo.email}`} className="btn-primary">
                    Say Hello
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;
