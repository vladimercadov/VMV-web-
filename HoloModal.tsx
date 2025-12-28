import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface HoloModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const HoloModal: React.FC<HoloModalProps> = ({ isOpen, onClose, title, children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling background
    } else {
      setTimeout(() => setShow(false), 300); // Wait for animation
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!show && !isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Backdrop (Darkened & Blurred) */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className={`
        relative w-full max-w-5xl max-h-[90vh] overflow-y-auto
        bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-xl
        shadow-[0_0_50px_rgba(0,210,255,0.15)]
        transform transition-all duration-300 ease-out
        flex flex-col
        ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}
      `}>
        
        {/* Holographic Header Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-80" />

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white uppercase tracking-widest drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
            {title}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors group border border-transparent hover:border-cyan-500/50"
          >
            <X className="w-6 h-6 text-slate-400 group-hover:text-cyan-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 text-slate-200">
          {children}
        </div>

        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-500" />
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-500" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-500" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-500" />
      </div>
    </div>
  );
};

export default HoloModal;