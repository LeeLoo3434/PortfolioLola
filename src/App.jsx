import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';

import '@fortawesome/fontawesome-svg-core/styles.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* ... */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add other routes here */}
          {/* Use Navigate to handle unmatched routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* ... */}
      </div>
    </Router>
  );
};

export default App;
