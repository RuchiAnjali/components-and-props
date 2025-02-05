
import './App.css'
import { useState } from 'react';
// useState

function App() { 
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const incrementTwice=() => {
   // setCount(count + 1);
    //setCount(count + 1);

    
    setCount(c => c + 1);
    setCount(c => c + 1);

  };

  const IncrementCount=() => {
    setCount(count + step);
  };

  const DecrementCount=() => {
    setCount(count - step);
  };

  return (
    <div className="app-container">
      <h1>Counter value: {count}</h1>
      <input type='number'
              value={step}
              onChange={(e) => setStep(parseInt(e.target.value))}/>
      <button onClick={IncrementCount}>Increment</button>
      <button onClick={DecrementCount}>Decrement</button>
      <button onClick={incrementTwice}>+2</button>

      </div>
  )
}


export default App
