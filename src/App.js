import React, { Fragment, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './components/login/login';
import PlanetInfo from './components/planet-info/planet-info';
import HomeComponent from './components/home/home';
import HeaderComponent from './common/header/header';
import LoaderComponent from './common/loader/loader';

function App() {
  return (
    <Fragment>
      <HeaderComponent />
      <Router>
        <Suspense fallback={<LoaderComponent />} />
        <Switch>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/planets/:id">
            <PlanetInfo />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
