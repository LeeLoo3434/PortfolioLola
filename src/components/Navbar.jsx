import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from './ToggleButton'; // Import the ToggleButton component
import '../styles.css'; // Import your custom CSS styles

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav style={{ backgroundColor: '#007bff', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/" style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
                Your Logo
            </Link>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button
                    onClick={toggleMobileMenu}
                    style={{ color: 'white', backgroundColor: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}
                >
                    {mobileMenuOpen ? (
                        <i className="fas fa-times"></i>
                    ) : (
                        <i className="fas fa-bars"></i>
                    )}
                </button>
                {/* Right-aligned items */}
                <div style={{ display: mobileMenuOpen ? 'block' : 'none', marginRight: '20px' }}>
                    <Link
                        to="/"
                        style={{ color: 'white', textDecoration: 'none', marginRight: '20px', fontSize: '1rem' }}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/projects"
                        style={{ color: 'white', textDecoration: 'none', fontSize: '1rem' }}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Projects
                    </Link>
                </div>
            </div>
            {/* Add the ToggleButton component */}
            <ToggleButton />
        </nav>
    );
};

export default Navbar;
