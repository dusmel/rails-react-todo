import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Form, Button, Transition } from 'semantic-ui-react';
import axios from 'axios';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import './session.scss';
import loginBg from '../../../assets/img/login-bg.png';

require('dotenv').config();

firebase.initializeApp({
  apiKey: 'AIzaSyAS7kf3CyQ36kR76d35MrPnFyJ1rVupED0',
  authDomain: 'rails-react-todo-8740a.firebaseapp.com',
});

class Login extends Component {
  state = {
    isSignedIn: false,
  };

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      if (user) {
        const data = {
          user: {
            email: user.email,
            password: process.env.SOCIAL_LOGIN_SECRET,
          },
        };
        axios
          .post('signup', data)
          .then(response => {
            const payload = response.data;
            console.log(payload);
          })
          .catch(error => console.log(error));
      }
      console.log('user', user);
    });
  };

  login = () => {
    return (
      <div className="login-form col-lg-6">
        <div className="title">
          {'This is a '}
          <span>todo-app</span>
        </div>
        <span className="login-message">Welcome Back. Please login to your account.</span>
        <Form>
          <Form.Input fluid label="Email" placeholder="Email" />
          <Form.Input type="password" fluid label="Password" placeholder="Password" />
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Button secondary className="px-5">
            Login
          </Button>
          <Link href to="/signup">
            <Button basic>Signup</Button>
          </Link>
        </Form>
        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  };

  signup = () => {
    return (
      <Transition visible animation="scale" duration={500}>
        <div className="signup-form col-lg-6">
          <div className="title">
            {'This is a '}
            <span>todo-app</span>
          </div>
          <span className="login-message">Welcome! Please register to have an account.</span>
          <Form>
            <Form.Input fluid label="Email" placeholder="Email" />
            <Form.Input type="password" fluid label="Password" placeholder="Password" />
            <Form.Input type="password" fluid label="Confirm Password" placeholder="Password" />
            <Form.Checkbox label="I agree to the Terms and Conditions" />
            <Button secondary className="px-5">
              Signup
            </Button>
            <Link href to="/login">
              <Button basic>Login</Button>
            </Link>
          </Form>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      </Transition>
    );
  };

  render() {
    const { isSignedIn } = this.state;
    return (
      <div className="Session">
        {isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>
              Welcome
              {firebase.auth().currentUser.displayName}
            </h1>
            <img alt="profile" src={firebase.auth().currentUser.photoURL} />
          </span>
        ) : (
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="session-container">
                <Route exact path="/login" render={() => this.login()} />
                <Route exact path="/signup" render={() => this.signup()} />
                <div className="login-illustration">
                  <img src={loginBg} className="img-fluid d-none d-lg-block" alt="login bg" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
