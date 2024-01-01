import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


const HireMePage = () => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <div className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}>
            <Navbar />
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold text-center mb-4">Hire Me</h1>
                <p className="mb-4">As a passionate Full-Stack Web Developer, I specialize in crafting engaging, responsive, and accessible web applications. My journey in tech, from salon owner to software engineering, highlights my versatility, creativity, and commitment to lifelong learning.</p>

                <h2 className="text-2xl font-semibold mt-6">Skills and Expertise:</h2>
                <p>With a robust skill set in Python3/Django, React.js, Node.js/Express, and more, I bring a comprehensive approach to web development. My projects, like 'The Cozy Corner' and 'FungiCollector', showcase my ability to develop full-stack applications and design user-centric interfaces.</p>

                <h2 className="text-2xl font-semibold mt-6">What I Offer:</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Standards-Compliant and Responsive Design: Creating web experiences that are mobile-first, accessible, and cross-browser compatible.</li>
                    <li>Performance Optimization: Ensuring fast, efficient, and responsive user interactions.</li>
                    <li>Problem-Solving and Creativity: Leveraging my diverse background for innovative solutions.</li>
                    <li>Quality and Commitment: Dedicated to delivering high-value work, tailored to your project's unique needs.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">Preferred Sectors:</h2>
                <p>Tech and Education: Contributing to platforms that empower learning and growth. Environmental Care and Wellness: Engaging in projects that promote sustainability and wellbeing. Creative Arts and Design: Combining my interest in aesthetics with technology.</p>

                <p className="mt-4">Let's Connect: If you're looking for a developer who brings a unique blend of technical skill, creative problem-solving, and a passion for impactful projects, I'd love to collaborate. Contact me at Lolarussell347@gmail.com to discuss how we can work together to make a positive difference through technology.</p>

                <Link
                    to="/contact"
                    style={{
                        backgroundColor: '#D8BFD8', // Purple background
                        color: '#ffffff', // White text
                        padding: '0.5rem 1rem', // Padding
                        borderRadius: '9999px', // Fully rounded corners
                        textDecoration: 'none', // No underline
                        textAlign: 'center', // Center text
                        transition: 'background-color 0.3s', // Transition for hover effect
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow
                        display: 'inline-block', // Inline block display
                        marginTop: '1rem' // Top margin
                    }}
                >
                    Contact Me
                </Link>
            </div>
        </div>
    );
};

export default HireMePage;
