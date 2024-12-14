import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Card from './components/Card'
import Button from './components/Button'
import Card1 from './components/Card1'
import Lougoutbtn from './components/Lougoutbtn'
import Loginbtn from './components/Loginbtn'


function App() {

  function handleClick()
  {
    alert("i am clicked");
  }
  
  function handleMouseOver()
  {
    alert("mouser over")
  }

  function handleInputChange(e){
    console.log("value till now: ", e.target.value);
  }

  return(
    <div>

      <form>
        <input type="text" onChange={handleInputChange}/>
        {/* <button>submit</button> */}
      </form>



      {/* <p onMouseOver={handleMouseOver}>
        i am a para
      </p>
    <button onClick={handleClick}>
      click me
    </button> */}
  </div>
  )
  
  

  // if(isLoggedin)
  // {
  //   return (
  //     <Lougoutbtn/>
  //   )
  // }
  // else{
  //   return (
  //     <Loginbtn/>
  //   )
  // }
  
}

export default App
