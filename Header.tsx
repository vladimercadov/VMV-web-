import React from 'react';
import Logo from './Logo.tsx';

const Header: React.FC = () => {
  return (
    <header className="w-full pt-6 pb-4 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between relative z-10">
      <div className="mb-4 md:mb-0 group cursor-default">
        <Logo />
      </div>

      <div className="flex-1 text-center md:text-right md:pl-8 mt-4 md:mt-0">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200 drop-shadow-[0_0_5px_rgba(0,210,255,0.8)] mb-2">
          ASISTENCIA VIRTUAL & IA
        </h1>
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent my-2 opacity-70"></div>
        <h2 className="text-lg md:text-xl text-cyan-300 tracking-[0.2em] font-medium uppercase drop-shadow-md">
          Evolución del mundo real al servicio digital
        </h2>
      </div>
    </header>
  );
};

export default Header;