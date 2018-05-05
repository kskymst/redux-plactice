import React from 'react';

const App = ({ number, plus, minus }) => (
  <div>
    <h2>{number}</h2>
    <button onClick={() => plus(1)}>+</button>
    <button onClick={() => minus(1)}>-</button>
  </div>
);

export default App;