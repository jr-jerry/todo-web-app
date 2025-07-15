import { useState, useContext } from 'react';
import { Menu01Icon, UserListIcon, Moon02Icon, GridViewIcon,Sun02Icon, ListSettingIcon,ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { motion } from 'framer-motion';
import {LayoutContext} from '../context/LayoutContext'
import { ThemeContext } from '../context/ThemeContext';

function Navbar({ toggleShowProfile }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {grid,toggleGrid}=useContext(LayoutContext);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    toggleShowProfile();
  };

  return (
    <div className={`
    flex 
    justify-between 
    items-center 
    m-2 p-2 
    rounded-lg 
    shadow-lg 
    px-2 
    h-[10%] ${theme === "dark" ? "bg-[#242424] text-white" : "bg-gray-100 text-gray-800"}`}>
      <div className="left-navbar flex items-center gap-2">
        <motion.button 
          onClick={handleToggleMenu}
          whileHover={{ scale: 1.1 ,transition:{duration:0.5},backgroundColor:theme=="light"?"#dcdcdc":"#4C604F" }}
          whileTap={{ scale: 0.9 }}
          className="p-1 rounded-full"
        >
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}
          />
        </motion.button>
        <span className="logo font-semibold text-lg">Todo</span>
      </div>
      
      <div className="right-navbar flex items-center gap-2 md:gap-4">
        <div className="search-button hidden md:block">
          <input
            type="text"
            placeholder="Search here..."
            className={`px-3 py-1 rounded-full text-sm border focus:outline-none focus:ring-2 focus:ring-amber-300 ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
            }`}
          />
        </div>
        
        <motion.button 
          onClick={toggleGrid}
          whileHover={{ scale: 1.1 ,transition:{duration:0.5},backgroundColor:theme=="light"?"#dcdcdc":"#4C604F" }}
          whileTap={{ scale: 0.9 }}
          className="p-1 rounded-full"
        >
          <HugeiconsIcon 
            icon={!grid ? GridViewIcon : ListSettingIcon}
            transition={{ duration: 0.5 }}
          />
        </motion.button>
        
        <motion.button 
          onClick={toggleTheme} 
          whileHover={{ scale: 1.1 ,transition:{duration:0.5},backgroundColor:theme=="light"?"#dcdcdc":"#4C604F" }}
          whileTap={{ scale: 0.9 }}
          className="p-1 rounded-full"
        >
          <HugeiconsIcon  className={`transition-transform duration-200`} icon={theme=='light'?Moon02Icon:Sun02Icon} transition={{ duration:0.5 }} />
        </motion.button>
      </div>
    </div>
  );
}

export default Navbar;
