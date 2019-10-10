import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Task from './Task/Task';
import Session from './auth/login/session';
import Button from './button';
import store from '../store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Task} />
          <Route exact path="/button" component={Button} />
          <Route path={['/login', '/signup']} component={Session} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
