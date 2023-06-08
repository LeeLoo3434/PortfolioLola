import React, { useContext } from 'react';
import cali from "../images/cali.jpeg";
import lolaaspen from "../images/lolaaspen.jpeg";
import ramen from "../images/gay.jpeg";
import styles from "./ProfileCarousel.module.css";
import { ThemeContext } from '../ThemeContext';

const images = [cali, lolaaspen, ramen];

const ProfileCarousel = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const containerClassName = isDarkMode
    ? `${styles.container} ${styles.dark}`
    : `${styles.container} ${styles.light}`;

  const nameClassName = isDarkMode ? styles.nameDark : styles.nameLight;
  const roleClassName = isDarkMode ? styles.roleDark : styles.roleLight;
  const markerClassName = isDarkMode ? styles.markerDark : styles.markerLight;
  const locationClassName = isDarkMode ? styles.locationDark : styles.locationLight;

  return (
    <div className={containerClassName}>
      <div className={styles.polaroid}>
        <img
          src={images[currentImage]}
          alt={`Image ${currentImage}`}
          className={styles.image}
        />
        <div className={styles.textContainer}>
          <div className={styles.nameContainer}>
            <div className={`${styles.text} ${nameClassName}`}>Lola Russell</div>
            <div className={`${styles.text} ${roleClassName}`}>Software Engineer</div>
          </div>
          <div className={styles.locationContainer}>
            <div className={styles.markerContainer}>
              <div className={`${styles.text} ${markerClassName}`}>📍</div>
              <div className={`${styles.text} ${locationClassName}`}>Los Angeles</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCarousel;
