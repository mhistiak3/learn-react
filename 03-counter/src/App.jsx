import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    if (count < 20) {
      setCount((count) => count + 1);
    }
  };
  const removeCount = () => {
     if (count > 0) {
       setCount((count) => count - 1);
     }
  };
  return (
    <>
      <h1>Hello React Developer</h1>
      <h3>Counter value: {count}</h3>
      <button onClick={addCount}>Add value</button>
      <br />
      <br />
      <button onClick={removeCount}>Remove value</button>
    </>
  );
}

export default App;
