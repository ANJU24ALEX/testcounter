import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleAddition = () => {
    setCount(count + 1);
  };

  const handleSubtraction = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <h1>REACT COUNTER</h1>
      <div className="counter-container">
        <button onClick={handleSubtraction} disabled={count === 0}>
          --
        </button>
        <p>{count}</p>
        <button onClick={handleAddition}>+</button>
      </div>
    </div>
  );
}

export default App;

