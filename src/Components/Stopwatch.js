import '../App.css';
import { useEffect, useState } from 'react';

function Stopwatch() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let timer;
    if (start) {
      timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }else{
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [count, start])

  const handleStart = () => {
    setStart(true);
  }

  const handlePause= ()=>{
    setStart(false);
  }
  
  const handleReset= ()=>{
    setCount(0);
    setStart(false);
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
