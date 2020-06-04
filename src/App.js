import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn';
import Landing from './components/Landing';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route exact path='/index' component={Landing} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
