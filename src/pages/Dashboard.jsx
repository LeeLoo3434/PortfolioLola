import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileCarousel from '../components/ProfileCarousel';
import Bio from '../components/Bio';
import ToggleButton from '../components/ToggleButton';
import { ThemeContext } from '../ThemeContext';
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
    <div className={containerClassName}>
      {/* Button Container */}
      <div className="flex justify-end p-4">
        <ToggleButton />
      </div>
      <div className="flex justify-center mt-4 md:w-1/2 md:ml-4">
        <ProfileCarousel className="w-1/2 md:w-full" />
      </div>
      {/* "Explore Projects" Button */}
      <div className={`flex justify-center mt-4 md:mr-4`}>
        <Link to="/projects" className="text-center">
          <button className="rounded-full bg-blue-500 text-white px-4 py-2 text-sm md:text-base hover:bg-blue-600 transition-colors shadow-md">
            Explore Projects
          </button>
        </Link>
      </div>
      <div className={`flex justify-center mt-4 md:ml-4 ${bioClassName}`}>
        {/* Bio Component */}
        <Bio
          showShortBio={showShortBio}
          handleShortBioClick={handleShortBioClick}
          handleLongBioClick={handleLongBioClick}
        />
      </div>
    </div>
  );
}
