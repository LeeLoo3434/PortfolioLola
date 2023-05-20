import React from 'react';
import { Link } from 'react-router-dom';
import ProfileCarousel from '../components/ProfileCarousel';
import '../styles.css';
import '../components/ProfileCarousel.module.css';

export default function Dashboard() {
  return (
    <div>
      <ProfileCarousel />
      <div className="flex justify-center mt-8">
        <Link
          to="/projects"
          className="text-4xl font-bold inline-block animate-rainbow mr-6"
        >
          Projects
        </Link>
        <Link
          to="/art-community"
          className="text-4xl font-bold inline-block animate-rainbow"
        >
          Art + Community
        </Link>
      </div>
    </div>
  );
}
