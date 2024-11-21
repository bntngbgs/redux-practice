import React from 'react';
import reduxLogo from '../assets/redux-logo.svg';
import './Counter.scss';

const Counter = () => {
  return (
    <div className="counter-wrapper">
      <div className="title-bar">
        <img src={reduxLogo} alt="redux logo" />
        <h2>Counter App With Redux</h2>
      </div>
      <div className="counter-app">
        <button>-</button>
        <span>0</span>
        <button>+</button>
      </div>
    </div>
  );
};

export default Counter;
