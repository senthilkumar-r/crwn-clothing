import React from 'react';
import PropTypes from 'prop-types';
import './home.styles.scss';

const Home = (props) => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="sub-title">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">MEN</h1>
            <span className="sub-title">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">WOMEN</h1>
            <span className="sub-title">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">KIDS</h1>
            <span className="sub-title">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">ACCESSORIES</h1>
            <span className="sub-title">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
