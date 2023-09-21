import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileCarousel from '../components/ProfileCarousel';
import Bio from '../components/Bio';
import { ThemeContext } from '../ThemeContext';
import Navbar from '../components/Navbar'; // Import the Navbar component
import styles from "./Dashboard.module.css";
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
      <Navbar /> {/* Include the Navbar component */}
      <div className={`${containerClassName} custom-container`}>
        <div className="flex"> {/* Remove flex-wrap and justify-center */}
          {/* ProfileCarousel */}
          <div className="md:w-1/2">
            <ProfileCarousel className="w-full" />
          </div>
          {/* Bio */}
          <div className={`md:w-1/2 ${bioClassName} ml-4`}>
            <Bio
              showShortBio={showShortBio}
              handleShortBioClick={handleShortBioClick}
              handleLongBioClick={handleLongBioClick}
            />
          </div>
        </div>
        {/* Explore Projects */}
        <div className="mt-8">
          <div className="flex justify-center">
            {/* <Link to="/projects" className="text-center">
              <button className="rounded-full bg-blue-500 text-white px-4 py-2 text-sm md:text-base hover:bg-blue-600 transition-colors shadow-md">
                Explore Projects
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
