import React, { memo, useState } from "react";
import { useRoutes, Link } from "react-router-dom";
import routes from "./router";

const App = memo(() => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>merge page</h2>
      <h2>{counter}</h2>
      <button onClick={increment}>+1</button>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>

      {useRoutes(routes)}
    </div>
  );
});

export default App;
