import React, { useState } from 'react';
import './App.css';

function App() {
  // State for the counter
  const [count, setCount] = useState(0);

  // Functions to increment and decrement
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Counter</h1>
        <p>Count: {count}</p>
        <div>
          <button onClick={increment} style={{ marginRight: '10px', padding: '10px 20px' }}>
            Increment
          </button>
          <button onClick={decrement} style={{ padding: '10px 20px' }}>
            Decrement
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;