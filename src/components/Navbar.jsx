import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
import ToggleButton from './ToggleButton'; // Import the ToggleButton component

const Navbar = () => {
    const { isDarkMode } = useContext(ThemeContext); // Removed the "toggleDarkMode" variable
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const navBackgroundColor = isDarkMode ? '#333' : '#D8BFD8';
    const textColor = isDarkMode ? 'lavender' : 'black';

    // Define mobileMenuStyles here
    const mobileMenuStyles = {
        display: mobileMenuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        top: '60px', // Adjust the top value as needed
        right: '0',
        backgroundColor: navBackgroundColor,
        width: '100%',
        padding: '10px',
    };

    return (
        <nav
            style={{
                backgroundColor: navBackgroundColor,
                padding: '15px', // Increased padding
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button
                    onClick={toggleMobileMenu}
                    style={{
                        color: textColor,
                        backgroundColor: 'transparent',
                        border: 'none',
                        fontSize: '1.8rem', // Larger font size
                        cursor: 'pointer',
                    }}
                >
                    {mobileMenuOpen ? (
                        <i className="fas fa-times"></i>
                    ) : (
                        <i className="fas fa-bars"></i>
                    )}
                </button>
                {/* Left-aligned items */}
                <div>
                    <Link
                        to="/"
                        style={{
                            color: textColor,
                            textDecoration: 'none',
                            marginBottom: '10px',
                            fontSize: '1.3rem', // Larger font size
                            margin: '0 20px', // Add margin here
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
                            fontSize: '1.3rem', // Larger font size
                            margin: '0 20px', // Add margin here
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
                            marginBottom: '10px',
                            fontSize: '1.3rem', // Larger font size
                            margin: '0 20px', // Add margin here
                        }}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            </div>
            {/* Apply mobileMenuStyles to the mobile menu */}
            <div
                style={mobileMenuStyles}
                className={mobileMenuOpen ? 'mobile-menu active' : 'mobile-menu'}
            >
                <Link
                    to="/"
                    style={{
                        color: textColor,
                        textDecoration: 'none',
                        fontSize: '1.3rem', // Larger font size
                        margin: '10px',
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
                        fontSize: '1.3rem', // Larger font size
                        margin: '10px',
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
                        fontSize: '1.3rem', // Larger font size
                        margin: '10px',
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Contact
                </Link>
            </div>
            <div>
                <ToggleButton />
            </div>
        </nav>
    );
};

export default Navbar;