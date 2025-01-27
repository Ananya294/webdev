import React, { useState,useMemo } from 'react'
import './App.css'
const App = () => {

  const [count,setCount] = useState(0);
  const [input,setInput] = useState(0);

  function expensiveTask(num)
  {
    console.log("inside exp task");
    for(let i=0;i<=10000000000;i++) {}
    return num*2;
  }

  let doubleValue = useMemo(() => expensiveTask(input), [input]);
  return (
    <div>
      <button onClick={() => setCount(count+1)}>
      increment
      </button>

      <div>
        Count: {count}
      </div>

      <input
      type="number"
      placeholder='type a number'
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      />
      <div>
        double : {doubleValue}
      </div>

    </div>
  )
}

export default App  