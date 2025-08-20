import React from 'react';
import { Button } from '@/components/ui/button';
import './HeroSection.css'

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-yellow-100 to-yellow-200 min-h-screen flex items-center" id="background">
      <div className="container mx-auto px-4 py-16" id="square">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Get Your Confidence Back with Natural-Looking Hair Replacement in Poole
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Discreet Private Salon.
          </p>
          <Button
          id="consultation-button" 
            size="lg" 
            className="bg-yellow-600 hover:bg-yellow-500 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Claim My Free Consultation
          </Button>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 text-sm text-gray-600">
        📍 12 Oakfield Road, Poole BH15 3BG
      </div>
    </section>
  );
};

export default HeroSection;