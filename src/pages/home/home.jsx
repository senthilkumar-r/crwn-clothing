import React from 'react';
// import PropTypes from 'prop-types';
import './home.styles.scss';
import Directory from '../../components/directory/directory';
const Home = (props) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

// Home.propTypes = {};

export default Home;
