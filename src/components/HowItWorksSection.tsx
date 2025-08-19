import React from 'react';
import { Calendar, FileText, Smile } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Book Your Free Consultation",
      description: "Through the form below."
    },
    {
      icon: FileText,
      title: "Get Your Personalised Plan",
      description: "Tailored to your needs."
    },
    {
      icon: Smile,
      title: "See the Results",
      description: "Walk out feeling confident again."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Your Hair Replacement Journey
        </h2>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start mb-8 last:mb-0">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-6">
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;