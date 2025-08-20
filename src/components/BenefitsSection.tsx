import React from 'react';
import { Lock, Scissors, Award } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Lock,
      title: "Private, 1-on-1 Consultation",
      description: "Discreet salon setting at 12 Oakfield Road."
    },
    {
      icon: Scissors,
      title: "Affordable, Natural-Looking Results",
      description: "Tailored solutions for every budget."
    },
    {
      icon: Award,
      title: "Experienced Senior Sylist",
      description: "Over 15 years specializing in hair replacement."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Why Choose Glisten for Hair Replacement?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                <benefit.icon className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;