import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import LinkedIn and GitHub icons
import ProfileCarousel from '../components/ProfileCarousel';
import Bio from '../components/Bio';
import { ThemeContext } from '../ThemeContext';
import Navbar from '../components/Navbar';
import styles from './Dashboard.module.css';
import '../styles.css';

export default function Dashboard() {
  const { isDarkMode } = useContext(ThemeContext);

  const containerClassName = isDarkMode ? 'container dark' : 'container light';
  const bioClassName = isDarkMode ? 'textDark' : 'textLight';

  const [showShortBio, setShowShortBio] = useState(true);

  const handleShortBioClick = () => {
    setShowShortBio(true);
  };

  const handleLongBioClick = () => {
    setShowShortBio(false);
  };

  return (
    <div>
      <Navbar />
      <div className={`${containerClassName} custom-container`}>
        <div className={styles.column}>
          <ProfileCarousel className="w-full" />
        </div>
        <div className={`${styles.column} ${bioClassName}`}>
          <Bio
            showShortBio={showShortBio}
            handleShortBioClick={handleShortBioClick}
            handleLongBioClick={handleLongBioClick}
          />
          {/* Move the Explore Projects button inside the Bio component */}
          <div className={styles.exploreButtonContainer}>
            <Link to="/projects">
              <button className={styles.exploreButton}>
                Explore Projects
              </button>
            </Link>
          </div>
          {/* Add LinkedIn and GitHub icons with spacing */}
          <div className={styles.socialIcons}>
            <a
              href="https://www.linkedin.com/in/lola-russell-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            {/* Add space between the icons */}
            <span className={styles.iconSpacer}></span>
            <a
              href="https://github.com/LeeLoo3434"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
