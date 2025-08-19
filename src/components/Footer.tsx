import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              Glisten Hair & Aesthetics
            </h3>
            <p className="text-gray-300">
              Professional hair replacement services in Poole BH15
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Gallery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p className="text-gray-300 mb-2">📍 12 Oakfield Road, Poole BH15 3BG</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Glisten Hair & Aesthetics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;