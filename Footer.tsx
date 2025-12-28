import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import Logo from './Logo.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-900/90 border-t border-slate-800 text-slate-300 py-6 z-10 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-3 transform scale-75 origin-left">
             <Logo className="flex-shrink-0" />
        </div>

        <div className="flex gap-8 md:gap-16">
            <div className="flex flex-col items-center group cursor-pointer">
                <div className="p-2 rounded-full border border-cyan-500/50 mb-1 group-hover:bg-cyan-500/20 transition-colors">
                     <MessageCircle className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-[0.65rem] text-slate-400 uppercase tracking-widest">WhatsApp</span>
                <span className="text-[0.6rem] text-slate-500">+57 315 677 00 40</span>
            </div>

             <div className="flex flex-col items-center group cursor-pointer">
                <div className="p-2 rounded-full border border-cyan-500/50 mb-1 group-hover:bg-cyan-500/20 transition-colors">
                     <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-[0.65rem] text-slate-400 uppercase tracking-widest">Email</span>
                <span className="text-[0.6rem] text-slate-500">vladimercadov@gmail.com</span>
            </div>
        </div>

        <div className="text-right border-l border-slate-700 pl-4">
            <p className="text-xs text-slate-400">© 2024 VMV Analytics</p>
            <p className="text-[0.65rem] text-slate-600">Todos derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;