import React from 'react';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from './ThemeContext';
import ToggleButton from './components/ToggleButton';
import '@fortawesome/fontawesome-svg-core/styles.css';

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Dashboard />
        <ToggleButton />
      </div>
    </ThemeProvider>
  );
};

export default App;
