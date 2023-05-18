import React from 'react';
import Dashboard from './pages/Dashboard';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import ToggleButton from './components/ToggleButton';
import ProfileCarousel from './components/ProfileCarousel';
import '@fortawesome/fontawesome-svg-core/styles.css';

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Dashboard />
        <ThemeContext.Consumer>
          {({ isDarkMode, toggleTheme }) => (
            <>
              <ToggleButton />
              {isDarkMode && <ProfileCarousel />}
            </>
          )}
        </ThemeContext.Consumer>
      </div>
    </ThemeProvider>
  );
}

export default App;
