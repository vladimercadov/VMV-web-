import React from 'react';
import { Megaphone, Globe, BotMessageSquare } from 'lucide-react';
import { ServiceCardProps } from '../types';

const services: ServiceCardProps[] = [
  {
    title: "MARKETING INTELIGENTE",
    icon: Megaphone,
    description: "Strategies boosted by AI"
  },
  {
    title: "PRESENCIA DIGITAL",
    icon: Globe,
    description: "Web development & SEO"
  },
  {
    title: "ATENCIÓN AL CLIENTE",
    icon: BotMessageSquare,
    description: "Automated chatbots & support"
  }
];

const ServiceCards: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 mb-20 z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group relative bg-slate-900/80 backdrop-blur-sm border border-slate-700 hover:border-cyan-400 rounded-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,210,255,0.2)]"
          >
            {/* Inner Glow Container */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Icon Box */}
            <div className="relative mb-6 p-4 rounded-xl border border-cyan-500/30 bg-slate-900 group-hover:bg-cyan-900/20 group-hover:border-cyan-400 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_15px_rgba(0,210,255,0.4)]">
              <service.icon className="w-12 h-12 text-cyan-400 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
            </div>

            {/* Text */}
            <h3 className="text-xl font-bold text-slate-100 uppercase tracking-wider group-hover:text-cyan-300 transition-colors">
              {service.title}
            </h3>
            
            {/* Decorative bottom line */}
            <div className="mt-4 w-12 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent group-hover:w-24 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;