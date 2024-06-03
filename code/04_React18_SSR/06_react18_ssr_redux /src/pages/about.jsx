import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../store/home";

const About = memo(() => {
  const { counter } = useSelector((state) => ({
    counter: state.home.counter
  }));
  const dispatch = useDispatch();

  const incrementAction = () => {
    dispatch(increment());
  };

  const decrementAction = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h2>about page</h2>
      <h2>{counter}</h2>
      <button onClick={incrementAction}>+1</button>
      <button onClick={decrementAction}>-1</button>
    </div>
  );
});

export default About;
