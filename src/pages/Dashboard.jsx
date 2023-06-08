import React, { useState, useContext } from 'react';
import ProfileCarousel from '../components/ProfileCarousel';
import Bio from '../components/Bio';
import { ThemeContext } from '../ThemeContext';
import '../styles.css';
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const { isDarkMode } = useContext(ThemeContext);
  const [showShortBio, setShowShortBio] = useState(true);

  const handleShortBioClick = () => {
    setShowShortBio(true);
  };

  const handleLongBioClick = () => {
    setShowShortBio(false);
  };

  const containerClassName = isDarkMode ? 'container dark' : 'container light';
  const bioClassName = isDarkMode ? 'textDark' : 'textLight';

  return (
    <div className={containerClassName}>
      <ProfileCarousel />
      <div className={`flex justify-center mt-8 ${styles.buttonContainer}`}>
        <div className={`flex ${styles.buttonGroup}`}>
          <button
            onClick={handleShortBioClick}
            className={`${styles.button} rounded-full py-2 px-4 ${showShortBio ? styles.active : ''}`}
          >
            Short
          </button>
          <button
            onClick={handleLongBioClick}
            className={`${styles.button} rounded-full py-2 px-4 ${!showShortBio ? styles.active : ''}`}
          >
            Long
          </button>
        </div>
      </div>
      <div className={`flex justify-center mt-4 ${bioClassName}`}>
        <Bio showShortBio={showShortBio} />
      </div>
    </div>
  );
}
