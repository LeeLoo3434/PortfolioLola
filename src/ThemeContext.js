import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    updateCSSVariables(); // Update the CSS variables when the mode changes
  }, [isDarkMode]);

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem("isDarkMode"));
    return savedMode || false; // Default to light mode if no preference is found
  }

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const updateCSSVariables = () => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty("--bg-color", "#1f2937");
      root.style.setProperty("--card-bg-color", "#374151");
      root.style.setProperty("--text-color", "#f9fafb");
      root.style.setProperty("--text-color-dark", "#f9fafb");
      root.style.setProperty("--text-color-light", "#f9fafb");
    } else {
      root.style.setProperty("--bg-color", "#f7fafc");
      root.style.setProperty("--card-bg-color", "#ffffff");
      root.style.setProperty("--text-color", "#000000");
      root.style.setProperty("--text-color-dark", "#000000");
      root.style.setProperty("--text-color-light", "#000000");
    }
  };

  useEffect(() => {
    updateCSSVariables(); // Initial update of CSS variables when the component mounts
  }, []); // Empty dependency array to only run it once

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
