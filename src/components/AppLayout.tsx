import React from 'react';
import HeroSection from './HeroSection';
import BenefitsSection from './BenefitsSection';
import HowItWorksSection from './HowItWorksSection';
import ConsultationForm from './ConsultationForm';
import UrgencySection from './UrgencySection';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ConsultationForm />
      <UrgencySection />
      <Footer />
    </div>
  );
};

export default AppLayout;