import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';
import Contact from '../components/Contact'; // Import the Contact component
import ContactPage from '../pages/ContactPage';

const AppRoutes = () => {
  return (
    <Switch>
      {/* Define routes */}
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route path="/projects/:id" component={ProjectDetailsPage} />
      <Route exact path="/contact" component={ContactPage} /> 
    </Switch>
  );
};

export default AppRoutes;
