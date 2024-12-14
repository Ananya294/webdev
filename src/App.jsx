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
  const [isLoggedin, setLoggedIn] = useState(false);

  if(!isLoggedin)
  {
    return (
      <Loginbtn/>
    )
  }

  return (
    <div>
      <h1>welcome all</h1>
      <div>
        {isLoggedin && <Lougoutbtn/>}
      </div>
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
