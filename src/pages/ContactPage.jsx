import React, { useContext } from 'react';
import ToggleButton from '../components/ToggleButton';
import { ThemeContext } from '../ThemeContext';
import Navbar from '../components/Navbar';
import '../styles.css';

const ContactPage = () => {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <div style={{ backgroundColor: isDarkMode ? '#1f2937' : '#f7fafc', color: isDarkMode ? '#f9fafb' : '#000000', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <div style={{ padding: '1rem' }}>
                <ToggleButton onClick={toggleDarkMode} />
            </div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>Contact Me</h1>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <div className='max-w-[600px]' style={{ background: isDarkMode ? '#374151' : '#ffffff', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.2)' }}>
                    <form name='contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field'>
                        <input type='hidden' name='form-name' value='contact' />
                        <div style={{ margin: '1rem 0' }}>
                            <label htmlFor='name' style={{ fontSize: '1rem', color: 'black', width: '80px', display: 'inline-block' }}>
                                Name:
                            </label>
                            <input type='text' name='name' id='name' required style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #cbd5e0', color: 'black' }} />
                        </div>
                        <div style={{ margin: '1rem 0' }}>
                            <label htmlFor='email' style={{ fontSize: '1rem', color: 'black', width: '80px', display: 'inline-block' }}>
                                Email:
                            </label>
                            <input type='email' name='email' id='email' required style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #cbd5e0', color: 'black' }} />
                        </div>
                        <div style={{ margin: '1rem 0' }}>
                            <label htmlFor='message' style={{ fontSize: '1rem', color: 'black', width: '80px', display: 'inline-block' }}>
                                Message:
                            </label>
                            <textarea name='message' id='message' required style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #cbd5e0', minHeight: '120px', color: 'black' }} />
                        </div>
                        <div style={{ margin: '1rem 0' }}>
                            <button type='submit' style={{ backgroundColor: '#D8BFD8', color: '#ffffff', padding: '0.5rem 1rem', borderRadius: '9999px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s', display: 'inline-block', width: '100%' }}>
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
