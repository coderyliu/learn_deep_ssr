import React, { memo } from "react";
import { useRoutes, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import routes from "./router";

const App = memo(() => {
  const { counter } = useSelector((state) => ({
    counter: state.home.counter
  }));

  return (
    <div>
      <h2>redux page</h2>
      <h2>{counter}</h2>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>

      {useRoutes(routes)}
    </div>
  );
});

export default App;
