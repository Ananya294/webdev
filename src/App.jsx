import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Card from './components/Card'
import Button from './components/Button'
import Card1 from './components/Card1'


function App() {
  const [name, setName] = useState('');

  return (
    <>
      <div>
        <Card1 title = "card1" name={name} setName={setName}/>
        <Card1 title = "card2" name={name} setName={setName}/>
        {/* <p>inside parent component {name} </p> */}
      </div>
    </>
  )
}

export default App
