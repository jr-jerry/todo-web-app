import { useState } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Navbar from './Navbar'
import DashBoard from './DashBoard'
function Homepage() {
    const [visible, setVisible] = useState(false);
    const {theme}=useContext(ThemeContext);
  
    return (
        <div className={`main  px-6 flex flex-col s:bg-amber-300 h-screen ${theme == "light" ? "bg-gray-100" : "bg-[#242424]"}`}>
            <Navbar toggleShowProfile={() => setVisible(prev => !prev)} />
            <DashBoard visible={visible} />
        </div>
    )
}
export default Homepage;