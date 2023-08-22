import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import ToggleButton from './components/ToggleButton';
import { ThemeProvider } from './ThemeContext';
import Dashboard from './pages/Dashboard';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage'; // Assuming you create this page

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/projects" component={ProjectsPage} />
            <Route path="/projects/:id" component={ProjectDetailsPage} />
          </Switch>
          <ToggleButton />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
