import { decrement } from './counterSlice';

export const decrementWithCheck = () => {
  return (dispatch, getState) => {
    if (getState().counter.count > 0) {
      dispatch(decrement());
    }
  };
};
