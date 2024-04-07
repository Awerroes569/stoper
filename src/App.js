import React, { useState, useRef } from 'react';
import Button from './components/Button/Button';

  

 const App= ()=> {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);
    const defaultDisabled = false;  
  
    const start = () => {
      if (!isRunning) {
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
          setTime(prevTime => prevTime + 10);
        }, 10);
      }
    };
  
    const stop = () => {
      if (isRunning) {
        clearInterval(intervalRef.current);
        setIsRunning(false);
      }
    };
  
    const reset = () => {
      clearInterval(intervalRef.current);
      setIsRunning(false);
      setTime(0);
    };
  
    const formatTime = () => {
      const minutes = Math.floor(time / 60000);
      const seconds = Math.floor((time % 60000) / 1000);
      const milliseconds = Math.floor((time % 1000) / 10);
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
    };
  
    return (
      <div>
        <h1>My First React Stopwatch</h1>
        <p>{formatTime()}</p>
        <Button action={start} running={isRunning} title='START'/>
        <Button action={stop} running={!isRunning} title='STOP'/>
        <Button action={reset} running={defaultDisabled} title='RESET'/>
      </div>
    );
  }

export default App;
