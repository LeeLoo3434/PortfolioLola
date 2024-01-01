import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
import ToggleButton from './ToggleButton'; // Make sure this component exists

const Navbar = () => {
    const { isDarkMode } = useContext(ThemeContext);

    const navBackgroundColor = isDarkMode ? '#333' : '#D8BFD8';
    const textColor = isDarkMode ? 'lavender' : 'black';

    return (
        <nav style={{ backgroundColor: navBackgroundColor, padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/" style={{ color: textColor, textDecoration: 'none', padding: '10px' }}>Home</Link>
                <Link to="/projects" style={{ color: textColor, textDecoration: 'none', padding: '10px' }}>Projects</Link>
                <Link to="/hire-me" style={{ color: textColor, textDecoration: 'none', padding: '10px' }}>Hire Me</Link>
                <Link to="/contact" style={{ color: textColor, textDecoration: 'none', padding: '10px' }}>Contact</Link>
            </div>
            <ToggleButton />
        </nav>
    );
};

export default Navbar;
