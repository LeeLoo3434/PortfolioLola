import React, { useContext, useState, useEffect } from 'react';
import lolaaspen from "../images/lolaaspen.jpeg";
import ramen from "../images/ramen.jpeg";
import rome from "../images/rome.jpeg";
import styles from "./ProfileCarousel.module.css";
import { ThemeContext } from '../ThemeContext';

const images = [ lolaaspen, ramen, rome];

export default function ProfileCarousel() {
  const { isDarkMode } = useContext(ThemeContext);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
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
    <div className={`md:w-1/2 ${containerClassName} ${styles.profileCarouselContainer}`}>
      <div className={styles.polaroid}>
        <img
          src={images[currentImage]}
          alt=""
          className={`${styles.image} fixed-image-size`} 
        />
        <div className={styles.textContainer}>
          <div className={styles.name}>
            <div className={`${styles.text} ${nameClassName}`}>Lola Russell</div>
            <div className={`${styles.text} ${roleClassName}`}>Software Engineer</div>
          </div>
          <div className={styles.location}>
            <div className={styles.markerContainer}>
              <div className={`${styles.text} ${markerClassName}`}>📍</div>
              <div className={`${styles.text} ${locationClassName}`}>Los Angeles</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
