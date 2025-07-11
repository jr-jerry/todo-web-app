import { useState, useContext } from 'react';
import { Menu01Icon, UserListIcon, Moon02Icon, GridViewIcon,Sun02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

function Navbar({ toggleShowProfile }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    toggleShowProfile();
  };

  return (
    <div className={`flex justify-between items-center m-2 p-2 rounded-lg shadow-lg px-4 h-[10%] ${theme === "dark" ? "bg-[#242424] text-white" : "bg-gray-100 text-gray-800"}`}>
      <div className="left-navbar flex items-center gap-2">
        <motion.button 
          onClick={handleToggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-1"
        >
          <HugeiconsIcon
            icon={Menu01Icon}
            className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}
          />
        </motion.button>
        <span className="logo font-semibold text-lg">Todo</span>
      </div>
      
      <div className="right-navbar flex items-center gap-4">
        <div className="search-button">
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
        
        <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
          <HugeiconsIcon icon={GridViewIcon} />
        </button>
        
        <button 
          onClick={toggleTheme} 
          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-200 rounded-full transition-colors"
        >
          <HugeiconsIcon icon={theme=='light'?Moon02Icon:Sun02Icon} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
