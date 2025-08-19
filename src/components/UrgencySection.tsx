import React from 'react';
import { Button } from '@/components/ui/button';

const UrgencySection: React.FC = () => {
  return (
    <section className="py-12 bg-green-50 border-l-4 border-green-600">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg md:text-xl font-semibold text-gray-900 mb-6">
          We only have a limited number of consultations available each month. 
          Book today to secure your free spot.
        </p>
        <Button 
          size="lg"
          className="bg-yellow-600 hover:bg-yellow-500 text-white px-8 py-4 text-lg font-semibold"
          onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Claim My Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default UrgencySection;