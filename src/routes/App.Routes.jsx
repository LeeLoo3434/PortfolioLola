import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';

const AppRoutes = () => {
  return (
    <Switch>
      {/* Define routes */}
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route path="/projects/:id" component={ProjectDetailsPage} />
      {/* Add more routes as needed */}
    </Switch>
  );
};

export default AppRoutes;
