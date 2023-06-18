import React, { useContext, useState } from 'react';
import ProfileCarousel from '../components/ProfileCarousel';
import Bio from '../components/Bio';
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
      <div className="flex justify-center mt-4">
        <ProfileCarousel className="w-3/4" />
      </div>
      <div className={`flex justify-center mt-4 ${bioClassName}`}>
        <Bio
          showShortBio={showShortBio}
          handleShortBioClick={handleShortBioClick}
          handleLongBioClick={handleLongBioClick}
        />
      </div>
    </div>
  );
}
