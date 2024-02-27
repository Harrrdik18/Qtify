import React from 'react';
import './App.css';
import Navbar from './components/nav/navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';

function App() {
  return (
    <div>
      <Navbar />
      <div className='hero'> <Hero className/> </div>
      <Section title="Top Albums" />
      <Section title="New Albums" />
    </div>
  );
}

export default App;
