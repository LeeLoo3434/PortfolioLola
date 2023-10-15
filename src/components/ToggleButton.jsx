import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ToggleButton = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme();
  };

  const buttonClassName = isDarkMode
    ? "bg-gray-800 text-white"
    : "bg-white text-gray-800";

  return (
    <div className={`rounded-full p-2 cursor-pointer z-10 ${buttonClassName}`} onClick={handleToggle}>
      <div className="relative w-14 h-7 flex items-center justify-between rounded-full">
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="text-2xl font-bold" />
      </div>
    </div>
  );
};

export default ToggleButton;
