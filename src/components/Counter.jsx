import React, {useState} from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);
    function handleClick(){
        setCount(count+1);
    }
  return (
    <div className='counter-container'>
        <p id='para'>you have clicked {count} times</p>
        <button id='btn' onClick={handleClick} >click me</button>
    </div>
  )
}

export default Counter