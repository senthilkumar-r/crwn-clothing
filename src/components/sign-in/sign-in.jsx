import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

const initialState = { email: '', password: '' };

const SignIn = (props) => {
  const [state, setstate] = useState(initialState);
  const { email, password } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={email}
          required
          handleChange={handleChange}
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          required
          handleChange={handleChange}
          label="Password"
        />
        <CustomButton type="submit">Sign in</CustomButton>
      </form>
    </div>
  );
};

SignIn.propTypes = {};

export default SignIn;
