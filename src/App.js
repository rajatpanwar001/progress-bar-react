import React, { Suspense } from 'react';
import 'components/FontawsomeIcons';

import './App.css';
import './dark.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from 'routes';
import PageNotFound from 'pages/PageNotFound';
import FileDownloader from 'pages/FileDownloader';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map(route => (
            <Route
              path={route.path}
              component={route.component}
              key={route.path}
            />
          ))}

          <Route path='/' exact>
            <FileDownloader />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
