import './App.css'
import Homepage from './components/Homepage'
import { ThemeProvider } from './context/ThemeContext'
import { TodoProvider } from './context/TodoContext'
import { DetailProvider } from './context/DetailContext'
import { LayoutProvider } from './context/LayoutContext'

function App() {

  return (
    <ThemeProvider>
      <TodoProvider>
        <DetailProvider>
        <LayoutProvider>
           <Homepage />
        </LayoutProvider>
        </DetailProvider>
      </TodoProvider>
    </ThemeProvider>
  )
}

export default App
