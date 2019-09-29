import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Task from './Task/Task';
import Button from './button';
import store from '../store';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Task} />
          <Route exact path="/button" component={Button} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
