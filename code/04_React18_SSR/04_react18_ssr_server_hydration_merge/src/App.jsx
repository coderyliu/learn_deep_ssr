import React, { memo, useState } from "react";

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
    </div>
  );
});

export default App;
