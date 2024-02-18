import { useState } from 'react'
import './App.css'
import Navbar from './components/nav/navbar'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'
import Card from './components/card/card'





function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
  <Navbar />
  <div className='hero'> <Hero className/> </div>
  <Section />
  
  
    </>
  )
}

export default App
