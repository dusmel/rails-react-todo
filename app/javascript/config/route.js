import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Task from '../components/Task/Task';
import Session from '../components/auth/session';

const Routes = ({ session: { isLoggedIN } }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Task} />
        <Route
          path={['/login', '/signup']}
          component={() => (isLoggedIN ? <Redirect to="/" /> : <Session />)}
        />
      </Switch>
    </Router>
  );
};

Routes.propTypes = {
  session: PropTypes.object.isRequired,
};

export const mapStateToProps = ({ session }) => ({
  session,
});

export default connect(mapStateToProps)(Routes);
