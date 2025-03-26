import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="w-full bg-gray-900/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-white tracking-wider">
            ARCHSTUDIO
          </h1>
        </div>
        <nav className="hidden md:flex space-x-12">
          {['Home', 'Portfolio', 'About', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white font-medium tracking-wide transition-colors">
              {item}
            </a>)}
        </nav>
        <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {isMenuOpen && <div className="md:hidden bg-gray-900/95 backdrop-blur-sm w-full border-t border-gray-800">
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-6">
            {['Home', 'Portfolio', 'About', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white font-medium tracking-wide transition-colors">
                {item}
              </a>)}
          </div>
        </div>}
    </header>;
}