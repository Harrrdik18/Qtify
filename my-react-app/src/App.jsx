import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import Search from './components/Search/Search'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Search placeholder={"Search a album of your choice"}></Search>
  <Button> Give Feedback </Button>
  
  

    </>
  )
}

export default App
