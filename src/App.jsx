import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import DashBoard from './components/DashBoard'

function App() {
  const [visible, setVisible] = useState(false);

  return (
     <div className="main  mx-6 flex flex-col  h-screen">
      <Navbar toggleShowProfile={() => setVisible(prev => !prev)} />
      <DashBoard visible={visible} />
     </div>
  )
}

export default App
