import { useState } from 'react'
import './App.css'
import Homepage from './components/homepage'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  return (
    <ThemeProvider>
    <Homepage/>
     </ThemeProvider>
  )
}

export default App
