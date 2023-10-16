import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
import ToggleButton from './ToggleButton';
import '../styles.css';

const Navbar = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const navBackgroundColor = isDarkMode ? '#333' : '#D8BFD8';
    const textColor = isDarkMode ? 'lavender' : 'black';

    const dropdownStyles = {
        display: mobileMenuOpen ? 'block' : 'none',
        backgroundColor: navBackgroundColor,
        position: 'absolute',
        top: '60px',
        left: '0',
        width: '200px',
        padding: '10px',
        zIndex: 999, // Add this line to set a high z-index value
    };
    return (
        <nav
            style={{
                backgroundColor: navBackgroundColor,
                padding: '15px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
            }}
        >
            <div>
                <div
                    onClick={toggleMobileMenu}
                    style={{
                        color: textColor,
                        fontSize: '1.8rem',
                        cursor: 'pointer',
                    }}
                >
                    <i className="fas fa-bars"></i>
                </div>
                <div style={dropdownStyles} className={mobileMenuOpen ? 'mobile-menu active' : 'mobile-menu'}>
                    <Link
                        to="/"
                        style={{
                            color: textColor,
                            textDecoration: 'none',
                            marginBottom: '10px',
                            fontSize: '1.3rem',
                            display: 'block',
                        }}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/projects"
                        style={{
                            color: textColor,
                            textDecoration: 'none',
                            marginBottom: '10px',
                            fontSize: '1.3rem',
                            display: 'block',
                        }}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Projects
                    </Link>
                    <Link
                        to="/contact"
                        style={{
                            color: textColor,
                            textDecoration: 'none',
                            fontSize: '1.3rem',
                            display: 'block',
                        }}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            </div>
            <div>
                <ToggleButton />
            </div>
        </nav>
    );
};

export default Navbar;
