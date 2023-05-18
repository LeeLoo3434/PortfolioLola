import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styles from "./ToggleButton.module.css";

const ToggleButton = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme();
  };

  const buttonClassName = isDarkMode
    ? `${styles.toggleButton} ${styles.darkModeButton}`
    : `${styles.toggleButton} ${styles.lightModeButton}`;

  const sliderClassName = isDarkMode ? styles.sliderDark : styles.sliderLight;

  return (
    <div className={buttonClassName} onClick={handleToggle}>
      <div className={styles.slider}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className={styles.icon} />
      </div>
      <div className={sliderClassName}></div>
    </div>
  );
};

export default ToggleButton;

