import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);  // Cleanup function 
  

  return (
    <div>
      <p>Timer: {seconds} seconds</p>
    </div>
  );
}

export default Timer;
