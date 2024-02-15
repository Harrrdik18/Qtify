import { useState } from 'react'
import './App.css'
import Navbar from './components/nav/navbar'
import Hero from './components/Hero/Hero'





function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
  <Navbar />

 <div className='hero'> <Hero className/> </div>
    </>
  )
}

export default App
