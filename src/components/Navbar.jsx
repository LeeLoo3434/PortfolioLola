import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
import ToggleButton from './ToggleButton'; // Import the ToggleButton component

const Navbar = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const navBackgroundColor = isDarkMode ? '#333' : '#D8BFD8';
    const textColor = isDarkMode ? 'lavender' : 'black';

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
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button
                    onClick={toggleMobileMenu}
                    style={{
                        color: textColor,
                        backgroundColor: 'transparent',
                        border: 'none',
                        fontSize: '1.8rem',
                        cursor: 'pointer',
                    }}
                >
                    {mobileMenuOpen ? (
                        <i className="fas fa-times"></i>
                    ) : (
                        <i className="fas fa-bars"></i>
                    )}
                </button>
                <div>
                    {/* This is the dropdown menu */}
                    <div
                        style={{
                            position: 'relative',
                            display: 'inline-block',
                        }}
                    >
                        <button
                            onClick={toggleMobileMenu}
                            style={{
                                color: textColor,
                                backgroundColor: 'transparent',
                                border: 'none',
                                fontSize: '1.3rem',
                                cursor: 'pointer',
                                margin: '0 20px',
                            }}
                        >
                            Menu
                        </button>
                        {mobileMenuOpen && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: '0',
                                    backgroundColor: navBackgroundColor,
                                    minWidth: '160px',
                                    zIndex: '1',
                                }}
                            >
                                <Link
                                    to="/"
                                    style={{
                                        color: textColor,
                                        textDecoration: 'none',
                                        display: 'block',
                                        padding: '10px',
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
                                        display: 'block',
                                        padding: '10px',
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
                                        display: 'block',
                                        padding: '10px',
                                    }}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <ToggleButton />
            </div>
        </nav>
    );
};

export default Navbar;
