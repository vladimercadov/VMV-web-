import React, { useState } from 'react';
import CircuitBackground from './components/CircuitBackground.tsx';
import Header from './components/Header.tsx';
import Navbar from './components/Navbar.tsx';
import HeroSection from './components/HeroSection.tsx';
import ServiceCards from './components/ServiceCards.tsx';
import Footer from './components/Footer.tsx';
import HoloModal from './components/HoloModal.tsx';
import { AboutContent, ServicesContent, ContactContent } from './components/ModalViews.tsx';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('inicio');

  const handleCloseModal = () => {
    setActiveTab('inicio');
  };

  const getModalTitle = () => {
    switch (activeTab) {
      case 'servicios': return 'Servicios de Asistencia Virtual';
      case 'acerca': return 'Acerca de Mí';
      case 'contacto': return 'Contacto Directo';
      default: return '';
    }
  };

  const renderModalContent = () => {
    switch (activeTab) {
      case 'servicios': return <ServicesContent />;
      case 'acerca': return <AboutContent />;
      case 'contacto': return <ContactContent />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <CircuitBackground />
      
      <HoloModal 
        isOpen={activeTab !== 'inicio'} 
        onClose={handleCloseModal}
        title={getModalTitle()}
      >
        {renderModalContent()}
      </HoloModal>

      <main className={`flex-grow flex flex-col w-full transition-all duration-500 ${activeTab !== 'inicio' ? 'blur-sm scale-[0.99] brightness-50' : ''}`}>
        <Header />
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="flex-grow flex flex-col justify-center">
             <HeroSection />
             <ServiceCards />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;