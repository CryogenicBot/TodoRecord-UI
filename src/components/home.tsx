import * as React from 'react';
const logo = require('../imgs/logo.svg');
import { Link } from 'react-router-dom';
import '../styles/home.css';
import { HomeProps } from './home-state';

function Home(props: HomeProps) {
  return (
    <div className="home">
      <div className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
        <h2>Welcome to Ract</h2>
      </div>
      <p className="home-intro">
        <Link to="/editor" />
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <button
        onClick={() => {
          props.onClick();
        }}
      >
        Test
      </button>
    </div>
  );
}

export default Home;
