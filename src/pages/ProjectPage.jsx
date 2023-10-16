import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import Navbar from '../components/Navbar'; // Import the Navbar component
import '../styles.css';

const projects = [
  {
    title: "Astro Calendar",
    description: "Built with Node.JS | Express | Mongoose | MongoDB",
    link: "https://astro-calendar.herokuapp.com/"
  },
  {
    title: "Minesweeper Clone",
    description: "Built with JavaScript | CSS | HTML",
    link: "https://leeloo3434.github.io/minesweeper-clone/"
  },
  {
    title: "SpeakEasy",
    description: "Built with Python, Django, PostgreSQL, HTML, and CSS",
    link: "https://github.com/LeeLoo3434/speakeasy"
  }
];

const ProjectPage = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: isDarkMode ? '#1f2937' : '#f7fafc', color: isDarkMode ? '#f9fafb' : '#000000' }}>
      <Navbar /> {/* Include the Navbar component */}
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>Projects</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: isDarkMode ? '#374151' : '#ffffff',
              color: isDarkMode ? '#f9fafb' : '#000000',
              borderRadius: '10px',
              padding: '1rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.2)',
              border: isDarkMode ? '1px solid #4a5568' : '1px solid #cbd5e0'
            }}
          >
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{project.title}</h2>
            <p style={{ fontSize: '1rem', color: isDarkMode ? '#a0aec0' : '#4a5568', marginBottom: '1rem' }}>{project.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#D8BFD8',
                  color: '#ffffff',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  transition: 'background-color 0.3s',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  display: 'inline-block'
                }}
              >
                View Live Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
