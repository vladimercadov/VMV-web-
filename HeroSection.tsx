import React from 'react';
import Logo from './Logo.tsx';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 mb-12 z-10 flex justify-center h-[500px] md:h-[600px]">
      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
        
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-black">
             <div className="absolute inset-0 w-full h-full">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="neon-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#00d2ff" stopOpacity="0.1" />
                        </linearGradient>
                         <linearGradient id="neon-purple" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#b700ff" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#b700ff" stopOpacity="0.1" />
                        </linearGradient>
                        <filter id="glow-blue">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                         <filter id="glow-purple">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>

                    <path d="M0 600 L 600 300" stroke="#1e293b" strokeWidth="1" />
                    <path d="M1200 600 L 600 300" stroke="#1e293b" strokeWidth="1" />
                    <line x1="600" y1="300" x2="600" y2="600" stroke="#1e293b" strokeWidth="1" opacity="0.5" />
                    
                    <g filter="url(#glow-blue)">
                        <path d="M -100 -50 L 500 250 L 500 350 L -100 650" fill="none" stroke="#00d2ff" strokeWidth="2" opacity="0.3" />
                        <path d="M 100 -20 L 520 260 L 520 340 L 100 620" fill="none" stroke="#00d2ff" strokeWidth="2" opacity="0.5" />
                        <path d="M 250 20 L 540 270 L 540 330 L 250 580" fill="none" stroke="#00d2ff" strokeWidth="3" opacity="0.7" />
                        <path d="M 380 60 L 560 280 L 560 320 L 380 540" fill="none" stroke="#00d2ff" strokeWidth="3" opacity="0.9" />
                    </g>

                    <g filter="url(#glow-purple)">
                         <path d="M 1300 -50 L 700 250 L 700 350 L 1300 650" fill="none" stroke="#b700ff" strokeWidth="2" opacity="0.3" />
                         <path d="M 1100 -20 L 680 260 L 680 340 L 1100 620" fill="none" stroke="#b700ff" strokeWidth="2" opacity="0.5" />
                         <path d="M 950 20 L 660 270 L 660 330 L 950 580" fill="none" stroke="#b700ff" strokeWidth="3" opacity="0.7" />
                         <path d="M 820 60 L 640 280 L 640 320 L 820 540" fill="none" stroke="#b700ff" strokeWidth="3" opacity="0.9" />
                    </g>
                </svg>
             </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-center z-10">
           <div className="absolute bottom-0 w-[400px] h-[400px] bg-blue-500/10 blur-[80px] rounded-full"></div>
           <img 
             src="foto.jpg" 
             alt="Vladimir Mercado Varela" 
             className="h-[85%] md:h-[95%] object-cover object-top mask-image-gradient drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]"
           />
        </div>

        <div className="absolute left-[8%] md:left-[15%] top-[40%] -translate-y-1/2 z-20 hidden md:flex flex-col items-center">
            <div className="relative p-4 flex items-center justify-center">
                 <div className="absolute inset-0 bg-cyan-500/10 blur-[50px] rounded-full"></div>
                 <div className="transform transition-transform hover:scale-105 duration-500">
                    <Logo large={true} />
                 </div>
            </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default HeroSection;