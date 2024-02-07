import React, { useState } from 'react';

const Counter = () => {
  // Step 1: Declare a state variable 'count' and a function 'setCount'
  const [count, setCount] = useState(0);

  // Step 2: Define a function to handle incrementing the count
  const handleIncrement = () => {
    // Step 3: Use 'setCount' to update the state
    setCount(count + 1);
  };

  // Step 4: Render the component with the current state
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment(Functional)</button>
    </div>
  );
};

export default Counter;
