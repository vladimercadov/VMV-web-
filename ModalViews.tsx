import React from 'react';
import { CheckCircle2, Server, ShoppingCart, MessageSquare, Cpu, ArrowRight } from 'lucide-react';

// --- ABOUT ME CONTENT ---
export const AboutContent: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      {/* Left Column: Intro */}
      <div className="flex-1 space-y-6">
        <div className="p-6 rounded-lg bg-blue-950/30 border border-blue-500/20">
          <h3 className="text-xl font-bold text-cyan-300 mb-2">Vladimir Mercado</h3>
          <p className="text-lg text-slate-300 leading-relaxed">
            Asistente Virtual con más de <span className="text-white font-semibold">25 años de experiencia</span> en operaciones, logística, servicio al cliente y administración en negocios físicos.
          </p>
          <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
          <p className="mt-4 text-slate-400 italic">
            "Ahora optimizado con herramientas de IA para darte un soporte ágil, preciso y confiable."
          </p>
        </div>

        <div className="flex items-center gap-4 text-cyan-200 font-bold text-lg p-4 bg-cyan-900/10 rounded-lg border border-cyan-500/30">
           <Cpu className="w-6 h-6 animate-pulse" />
           <span>Experiencia real en negocios + Asistencia Virtual de nueva generación</span>
        </div>
      </div>

      {/* Right Column: Checklist */}
      <div className="flex-1">
        <ul className="space-y-4">
          {[
            "25 años gestionando operaciones reales",
            "Soporte administrativo profesional",
            "Atención al cliente multicanal",
            "Integración de herramientas modernas (Workspace, CRM, IA)",
            "Soluciones rápidas, claras y sin complicaciones",
            "Operación organizada + comunicación permanente"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 group">
              <CheckCircle2 className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0 group-hover:text-cyan-400 transition-colors" />
              <span className="text-slate-300 group-hover:text-white transition-colors">{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-8 p-4 bg-purple-900/20 border-l-4 border-purple-500 rounded-r-lg">
          <p className="font-semibold text-purple-200">
            La IA y yo hacemos la parte operativa para crecer tu negocio.
          </p>
        </div>
      </div>
    </div>
  );
};

// --- SERVICES CONTENT ---
export const ServicesContent: React.FC = () => {
  const services = [
    {
      title: "Soporte Administrativo",
      icon: Server,
      color: "text-blue-400",
      items: ["Gestión de correo y agendas", "Organización en Google Workspace", "Creación de documentos", "Transcripciones", "Planificación de tareas"]
    },
    {
      title: "Gestión de E-commerce",
      icon: ShoppingCart,
      color: "text-green-400",
      items: ["Procesamiento de pedidos", "Control de inventario", "Atención a compradores", "Actualización de productos"]
    },
    {
      title: "Atención al Cliente",
      icon: MessageSquare,
      color: "text-yellow-400",
      items: ["Email", "Chat", "WhatsApp Business", "Mensajería interna y CRM"]
    },
    {
      title: "Integración IA",
      icon: Cpu,
      color: "text-purple-400",
      items: ["Automatización de respuestas", "Optimización de tareas", "Redacción asistida", "Organización inteligente"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, idx) => (
        <div key={idx} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all hover:bg-slate-800/80 group">
          <div className="flex items-center gap-4 mb-4">
            <div className={`p-3 rounded-lg bg-black/40 border border-white/5 ${service.color}`}>
              <service.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{service.title}</h3>
          </div>
          <ul className="space-y-2">
            {service.items.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                <ArrowRight className="w-3 h-3 text-cyan-500/50" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// --- CONTACT CONTENT ---
export const ContactContent: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-8 py-8">
            <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 p-8 rounded-2xl border border-cyan-500/30 max-w-2xl w-full">
                <h3 className="text-2xl font-bold text-white mb-6">¿Listo para optimizar tu negocio?</h3>
                <p className="text-slate-300 mb-8">
                    Contacta ahora para una consulta inicial y descubre cómo la asistencia virtual potenciada con IA puede transformar tu operativa diaria.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="mailto:vladimercadov@gmail.com" className="flex items-center justify-center gap-3 p-4 bg-slate-800 hover:bg-cyan-600/20 border border-slate-600 hover:border-cyan-400 rounded-xl transition-all group">
                         <span className="text-slate-200 group-hover:text-cyan-300 font-semibold">vladimercadov@gmail.com</span>
                    </a>
                    <div className="flex items-center justify-center gap-3 p-4 bg-slate-800 border border-slate-600 rounded-xl">
                         <span className="text-slate-200 font-semibold">+57 315 677 00 40</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
