import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';

const App = () => {

  const[amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick()
  {
    dispatch(increment());
  }

  function handleDecrementClick()
  {
    dispatch(decrement());
  }

  function handleResetClick()
  {
    dispatch(reset());
  }

  function handleResetClick()
  {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className='container'>
      <button onClick={handleIncrementClick}> + </button>
      <p>count:{count} </p>
      <button onClick={handleDecrementClick}> - </button>
      <br />
      <button onClick={handleResetClick}> reset </button>
      <br />
      <input type="Number" 
      value={amount}
      placeholder='enter amount'
      onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <button onClick={handleResetClick}> inc by amount</button>


    </div>
  )
}

export default App