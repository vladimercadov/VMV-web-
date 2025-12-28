import React from 'react';

const CircuitBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Dark Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black opacity-90" />
      
      {/* Top Left Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full" />
      
      {/* Top Right Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full" />

      {/* SVG Circuit Lines */}
      <svg className="absolute w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d2ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00d2ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#00d2ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Horizontal Lines */}
        <path d="M0 100 H 300 L 350 150 H 1000" stroke="url(#line-gradient)" strokeWidth="1" fill="none" />
        <path d="M0 200 H 200 L 250 250 H 1200" stroke="url(#line-gradient)" strokeWidth="1" fill="none" />
        <path d="M100% 150 H 800 L 750 100 H 0" stroke="url(#line-gradient)" strokeWidth="1" fill="none" />
        
        {/* Vertical/Corner Elements */}
        <circle cx="300" cy="100" r="3" fill="#00d2ff" />
        <circle cx="350" cy="150" r="3" fill="#00d2ff" />
        <circle cx="800" cy="150" r="3" fill="#b700ff" />
        
        {/* Right side detailing */}
        <path d="M 1400 300 V 500 L 1350 550 V 800" stroke="#b700ff" strokeWidth="1" strokeOpacity="0.5" fill="none" />
        <circle cx="1400" cy="300" r="2" fill="#b700ff" />
      </svg>
      
      {/* Scanlines Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[1] bg-[length:100%_2px,3px_100%] pointer-events-none" />
    </div>
  );
};

export default CircuitBackground;