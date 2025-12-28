import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Megaphone, Globe, BotMessageSquare, 
  MessageCircle, Mail, X, CheckCircle2, 
  Server, ShoppingCart, MessageSquare, 
  Cpu, ArrowRight 
} from 'lucide-react';

// --- COMPONENTES INTERNOS ---

// Fixed: Added explicit typing for Logo props
const Logo = ({ className = "", large = false }: { className?: string; large?: boolean }) => (
  <div className={`relative flex flex-col items-center justify-center ${className}`}>
    <img 
      src="logo.png" 
      alt="VMV Logo" 
      className={`${large ? 'w-64 md:w-96' : 'w-28 md:w-36'} h-auto object-contain mix-blend-screen filter drop-shadow-[0_0_10px_rgba(0,210,255,0.3)]`}
    />
  </div>
);

const CircuitBackground = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black opacity-90" />
    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full animate-glow" />
    <svg className="absolute w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 100 H 300 L 350 150 H 1000" stroke="#00d2ff" strokeWidth="0.5" fill="none" />
      <path d="M100% 150 H 800 L 750 100 H 0" stroke="#b700ff" strokeWidth="0.5" fill="none" />
      <circle cx="300" cy="100" r="2" fill="#00d2ff" />
      <circle cx="800" cy="150" r="2" fill="#b700ff" />
    </svg>
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-[1] bg-[length:100%_2px,3px_100%]" />
  </div>
);

// Fixed: Added explicit typing for HoloModal props to ensure children are recognized as a required prop
const HoloModal = ({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (isOpen) { setShow(true); document.body.style.overflow = 'hidden'; }
    else { setTimeout(() => setShow(false), 300); document.body.style.overflow = 'unset'; }
  }, [isOpen]);
  if (!show && !isOpen) return null;
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />
      <div className={`relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-slate-900/90 border border-cyan-500/30 rounded-xl shadow-2xl transform transition-all duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}>
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-cyan-300 uppercase tracking-widest">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full"><X className="w-6 h-6 text-slate-400" /></button>
        </div>
        <div className="p-6 md:p-10 text-slate-200">{children}</div>
      </div>
    </div>
  );
};

// --- CONTENIDOS DE MODALES ---

const AboutView = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="space-y-4">
      <div className="p-6 bg-blue-900/20 border border-blue-500/30 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-2">Vladimir Mercado</h3>
        <p className="text-slate-300">Más de 25 años de experiencia en operaciones y logística, ahora potenciado con Inteligencia Artificial.</p>
      </div>
      <div className="flex items-center gap-3 p-4 bg-cyan-900/20 rounded-lg border border-cyan-500/20">
        <Cpu className="text-cyan-400" />
        <span className="text-sm font-semibold">Tecnología + Experiencia Real</span>
      </div>
    </div>
    <ul className="space-y-3">
      {["Gestión de operaciones reales", "Soporte administrativo pro", "Atención multicanal", "Integración IA (Workspace, CRM)"].map((item, i) => (
        <li key={i} className="flex items-center gap-3 text-slate-300">
          <CheckCircle2 className="w-5 h-5 text-cyan-400" /> {item}
        </li>
      ))}
    </ul>
  </div>
);

const ServicesView = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      { t: "Administrativo", i: Server, c: "Gestión de agenda, correos y Google Workspace" },
      { t: "E-commerce", i: ShoppingCart, c: "Pedidos, inventario y atención a compradores" },
      { t: "Atención Cliente", i: MessageSquare, c: "WhatsApp Business, CRM y soporte" },
      { t: "IA & Automatización", i: Cpu, c: "Respuestas inteligentes y optimización de tareas" }
    ].map((s, idx) => (
      <div key={idx} className="p-5 bg-slate-800/40 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-colors">
        <div className="flex items-center gap-3 mb-2">
          <s.i className="text-cyan-400 w-5 h-5" />
          <h4 className="font-bold text-white">{s.t}</h4>
        </div>
        <p className="text-sm text-slate-400">{s.c}</p>
      </div>
    ))}
  </div>
);

const ContactView = () => (
  <div className="text-center space-y-6">
    <p className="text-lg text-slate-300">¿Listo para llevar tu negocio al siguiente nivel?</p>
    <div className="flex flex-col md:flex-row justify-center gap-4">
      <a href="mailto:vladimercadov@gmail.com" className="px-6 py-4 bg-slate-800 border border-cyan-500/30 rounded-xl hover:bg-cyan-500/10 transition-all flex items-center justify-center gap-3">
        <Mail className="text-cyan-400" /> vladimercadov@gmail.com
      </a>
      <div className="px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center gap-3">
        <MessageCircle className="text-green-400" /> +57 315 677 00 40
      </div>
    </div>
  </div>
);

// --- APP PRINCIPAL ---

const App = () => {
  const [activeTab, setActiveTab] = useState('inicio');

  return (
    <div className="min-h-screen flex flex-col relative">
      <CircuitBackground />
      
      <HoloModal 
        isOpen={activeTab !== 'inicio'} 
        onClose={() => setActiveTab('inicio')}
        title={activeTab === 'servicios' ? 'Servicios' : activeTab === 'acerca' ? 'Acerca de Mí' : 'Contacto'}
      >
        {activeTab === 'servicios' && <ServicesView />}
        {activeTab === 'acerca' && <AboutView />}
        {activeTab === 'contacto' && <ContactView />}
      </HoloModal>

      {/* Header */}
      <header className="pt-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 z-10">
        <Logo />
        <div className="text-center md:text-right">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">ASISTENCIA VIRTUAL & IA</h1>
          <p className="text-cyan-400 text-sm md:text-base tracking-[0.3em] uppercase">Evolución Digital</p>
        </div>
      </header>

      {/* Navbar */}
      <nav className="max-w-4xl mx-auto w-full px-4 my-8 z-20">
        <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-full flex justify-around p-1">
          {['inicio', 'servicios', 'acerca', 'contacto'].map(t => (
            <button 
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all ${activeTab === t ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/50' : 'text-slate-400 hover:text-white'}`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 mb-12">
        <div className="relative w-full max-w-5xl aspect-video md:aspect-[21/9] bg-black rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
          <div className="absolute inset-0 bg-tech-grid opacity-20" />
          <img src="foto.jpg" alt="Profile" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%] object-contain mask-image-gradient" />
          <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden md:block opacity-50">
            <Logo large />
          </div>
        </div>
        
        {/* Service Mini Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-5xl">
          {[
            { t: "Marketing IA", i: Megaphone },
            { t: "Web & SEO", i: Globe },
            { t: "Soporte 24/7", i: BotMessageSquare }
          ].map((s, i) => (
            <div key={i} className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl flex flex-col items-center text-center group hover:border-cyan-500/40 transition-all">
              <s.i className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold uppercase tracking-widest">{s.t}</h3>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs">
          <Logo className="scale-75 opacity-50" />
          <div className="flex gap-8">
            <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> vladimercadov@gmail.com</div>
            <div className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> +57 315 677 00 40</div>
          </div>
          <p>© 2024 VMV Analytics. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);