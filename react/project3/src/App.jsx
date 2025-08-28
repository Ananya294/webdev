import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const[time,setTime] = useState(0);

  let timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime(time=>time+1)
    },1000);
  }

  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer(){
    stopTimer();
    setTime(0);
  }

  return (
    <div>
      <h1>stopwatch:{time}</h1>
      <button onClick={startTimer}>
        start
      </button>
      <br />
      <button onClick={stopTimer}>
        stop
      </button>
      <br />
      <button onClick={resetTimer}>
        restart
      </button>
    </div>
  )
}

export default App