import { useState } from 'react'
import './App.css'
import Joke from './components/Joke'

function App() {
  return (
    <div className='App'>
      <h1> Joke Genrator By Using React And Joke API</h1>
      <Joke/>
    </div>
  )
}

export default App
