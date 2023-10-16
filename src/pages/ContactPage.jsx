import React, { useContext } from 'react';

import { useForm } from '@formcarry/react';
import Navbar from '../components/Navbar';
import '../styles.css';
import { ThemeContext } from '../ThemeContext';

function ContactPage() {
    const { isDarkMode } = useContext(ThemeContext);
    const { state, submit } = useForm({ id: 'ffyjh6_Bu6' });

    if (state.submitted) {
        return <div>Thank you! We received your submission.</div>;
    }

    return (
        <div
            style={{
                backgroundColor: isDarkMode ? '#1f2937' : '#f7fafc',
                color: isDarkMode ? '#f9fafb' : '#000000',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Navbar />
            <div style={{ padding: '1rem' }}>

            </div>
            <h1
                style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: '6rem',
                }}
            >
                Let's Connect 💬
            </h1>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                }}
            >
                <div
                    className="max-w-[600px]"
                    style={{
                        background: isDarkMode ? '#374151' : '#ffffff',
                        padding: '3rem',
                        borderRadius: '5px',
                        boxShadow:
                            '0 4px 6px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <form onSubmit={submit}>
                        <div style={{ margin: '1rem 0' }}>
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                required
                                style={{
                                    padding: '0.5rem',
                                    borderRadius: '4px',
                                    border: '1px solid #cbd5e0',
                                    color: 'black',
                                    width: '100%',
                                }}
                            />
                        </div>

                        <div style={{ margin: '1rem 0' }}>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                required
                                style={{
                                    padding: '0.5rem',
                                    borderRadius: '4px',
                                    border: '1px solid #cbd5e0',
                                    color: 'black',
                                    width: '100%',
                                }}
                            />
                        </div>

                        <div style={{ margin: '1rem 0' }}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                style={{
                                    padding: '0.5rem',
                                    borderRadius: '4px',
                                    border: '1px solid #cbd5e0',
                                    minHeight: '120px',
                                    color: 'black',
                                    width: '100%',
                                }}
                            />
                        </div>

                        <div style={{ margin: '1rem 0' }}>
                            <button
                                type="submit"
                                style={{
                                    backgroundColor: '#D8BFD8',
                                    color: '#ffffff',
                                    padding: '0.5rem .5rem',
                                    borderRadius: '9999px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s',
                                    display: 'inline-block',
                                    width: '100%'
                                }}
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
