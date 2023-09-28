import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
import ToggleButton from './ToggleButton'; // Import the ToggleButton component
import '../styles.css'; // Import your custom CSS styles

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const navBackgroundColor = isDarkMode ? '#333' : '#007bff';
    const textColor = isDarkMode ? 'white' : 'black';

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
        <nav style={{ backgroundColor: navBackgroundColor, padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button
                    onClick={toggleMobileMenu}
                    style={{ color: textColor, backgroundColor: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}
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
                        style={{ color: textColor, textDecoration: 'none', marginBottom: '10px', fontSize: '1rem', marginRight: '20px' }}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/projects"
                        style={{ color: textColor, textDecoration: 'none', marginBottom: '10px', fontSize: '1rem', marginRight: '20px' }}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Projects
                    </Link>
                    {/* Add more links as needed */}
                </div>
            </div>
            <div>
                <ToggleButton />
            </div>
        </nav>
    );
};

export default Navbar;
