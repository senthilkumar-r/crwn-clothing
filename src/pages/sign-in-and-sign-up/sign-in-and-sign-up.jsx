import React from 'react';
import PropTypes from 'prop-types';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in';

const SignInAndSignUp = (props) => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
    </div>
  );
};

SignInAndSignUp.propTypes = {};

export default SignInAndSignUp;
