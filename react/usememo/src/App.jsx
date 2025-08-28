import React, { useCallback, useState } from 'react'
import { Child } from './components/Child';

const App = () => {

  const [count,setCount] = useState(0);

  const handleClick = useCallback(() =>{
    setCount(count+1);
  },[count]);

  return (
    <div>
      <div>
        count: {count}
      </div>
      <div>
        <button onClick={handleClick}>
          increment
        </button>
      </div>
      <div>
        <Child buttonName="click me"
        handleClick={handleClick}/>
      </div>
    </div>
  )
}

export default App