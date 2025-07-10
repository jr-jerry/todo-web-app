import { useState } from 'react'
import './App.css'
import Homepage from './components/homepage'
import { ThemeProvider } from './context/ThemeContext'
import { TodoProvider } from './context/TodoContext'

function App() {

  return (
    <ThemeProvider>
      <TodoProvider>
        <Homepage />
      </TodoProvider>

    </ThemeProvider>
  )
}

export default App
