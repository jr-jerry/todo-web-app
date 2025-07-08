import { useState } from 'react'
import { Menu01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { UserListIcon } from '@hugeicons/core-free-icons'
import { Moon02Icon } from '@hugeicons/core-free-icons'
import { GridViewIcon } from '@hugeicons/core-free-icons'
import { motion } from 'framer-motion'

function Navbar({ toggleShowProfile }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    toggleShowProfile()
  }

  return (
    
      <div className="flex justify-between items-center m-2 p-2 rounded-lg shadow-lg px-4 h-[10%]">
        <span className="left-navbar flex justify-evenly gap-2">
          <span className="hamburger-icon flex items-center">
            <motion.button whilehover={{scale:1.1}} whileTap={{scale:0.8}} transition={{type:'spring',stiffness:100}}>
            <button onClick={handleToggleMenu}>
              <HugeiconsIcon
                icon={Menu01Icon}
                className={`${isMenuOpen ? 'rotate-90' : ''}`}
              />
            </button>
            </motion.button>
            
            <span className="logo mx-2">Todo</span>
          </span>
        </span>
        <span className="right-navbar flex items-center">
          <span className="search-button">
            <input
              type="text"
              placeholder="search here"
              className="mx-2 shadow-lg rounded-2xl p-1 border-1 border-amber-200"
            />
          </span>
          <span className="grid-button mx-2">
            <button>
              <HugeiconsIcon icon={GridViewIcon} />
            </button>
          </span>
          <span className="theme-change mx-2">
            <button>
              <HugeiconsIcon icon={Moon02Icon} />
            </button>
          </span>
        </span>
      </div>
    
  )
}

export default Navbar
