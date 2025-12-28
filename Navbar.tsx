import React from 'react';
import { NavItem } from '../types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const navItems: NavItem[] = [
  { id: 'inicio', label: 'INICIO' },
  { id: 'servicios', label: 'SERVICIOS' },
  { id: 'acerca', label: 'ACERCA DE MI' },
  { id: 'contacto', label: 'CONTACTO' },
];

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="w-full max-w-5xl mx-auto my-6 px-4 z-20 relative">
      <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-lg flex flex-wrap justify-center md:justify-between items-center px-2 py-2 md:px-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`
              relative px-4 py-3 text-sm md:text-base font-semibold tracking-wider transition-all duration-300 uppercase
              ${activeTab === item.id 
                ? 'text-white' 
                : 'text-slate-400 hover:text-cyan-200'}
            `}
          >
            {item.label}
            {activeTab === item.id && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-cyan-400 shadow-[0_0_10px_#00d2ff] rounded-t-full"></span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;