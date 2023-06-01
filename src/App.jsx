import './App.css'

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div >
      <h2>Contador </h2>
      <h1> {count}</h1>
      <button onClick={decrementar}>-</button>
      <button onClick={incrementar}>+</button>
      <button onClick={reset}>Reiniciar</button>
    </div>
  );
}

export default Counter;