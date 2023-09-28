import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import styles from './ContactForm.module.css'; // Import your ContactForm styles

const ContactForm = () => {
    const { isDarkMode } = useContext(ThemeContext);

    // Define a containerClassName based on the theme
    const containerClassName = isDarkMode
        ? `${styles.contactFormContainer} dark`
        : `${styles.contactFormContainer} light`;

    return (
        <form name="contact" method="POST" data-netlify="true" className={containerClassName}>
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label>Your Name: <input type="text" name="name" /></label>
            </p>
            {/* Add more form fields as needed */}
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    );
};

export default ContactForm;
