import { useState } from 'react'
import './App.css'
import Homepage from './components/homepage'
import { ThemeProvider } from './context/ThemeContext'
import { TodoProvider } from './context/TodoContext'
import { DetailProvider } from './context/DetailContext'

function App() {

  return (
    <ThemeProvider>
      <TodoProvider>
        <DetailProvider>
        <Homepage />
        </DetailProvider>
      </TodoProvider>
    </ThemeProvider>
  )
}

export default App
