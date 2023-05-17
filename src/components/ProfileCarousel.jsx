import React, { useState, useEffect } from "react";
import cali from "../images/cali.jpeg";
import lolaaspen from "../images/lolaaspen.jpeg";
import ramen from "../images/gay.jpeg";
import styles from "./ProfileCarousel.module.css";

const images = [cali, lolaaspen, ramen];

const ProfileCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.polaroid}>
        <img
          src={images[currentImage]}
          alt={`Image ${currentImage}`}
          className={styles.image}
        />
        <div className={styles.textContainer}>
          <div className={styles.text}>Lola Russell</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCarousel;
