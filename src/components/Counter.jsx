import React from 'react';
import reduxLogo from '../assets/redux-logo.svg';
import './Counter.scss';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../redux/features/counterSlice';
import { decrementWithCheck } from '../redux/features/actions';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="counter-wrapper">
      <div className="title-bar">
        <img src={reduxLogo} alt="redux logo" />
        <h2>Counter App With Redux</h2>
      </div>
      <div className="counter-app">
        <button onClick={() => dispatch(decrementWithCheck())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
};

export default Counter;
