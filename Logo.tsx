import React from 'react';

interface LogoProps {
  className?: string;
  large?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", large = false }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* 
        Image based Logo replacement.
        mix-blend-screen is used to knock out the black background of the provided logo.png
        so only the glowing text remains visible against the dark app background.
      */}
      <img 
        src="logo.png" 
        alt="VMV Vladimir Mercado Varela" 
        className={`
          ${large ? 'w-64 md:w-96' : 'w-28 md:w-36'} 
          h-auto
          object-contain 
          mix-blend-screen
          filter drop-shadow-[0_0_10px_rgba(0,210,255,0.3)]
          transition-all duration-300
        `}
      />
    </div>
  );
};

export default Logo;