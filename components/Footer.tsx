import React from 'react';
import { Logo } from './Logo';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-arenate-dark text-white py-8 border-t border-arenate-green/20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div>
          <div className="bg-white/10 p-2 rounded-lg inline-block mb-2">
             <Logo className="text-white" variant="light" />
          </div>
          <p className="text-arenate-light/70 text-xs max-w-xs">
            The Competition Sphere. Empowering campus culture.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-3">
          <span className="text-sm font-medium">Contact Us</span>
          <span className="hidden md:inline text-arenate-light/30">|</span>
          <span className="text-arenate-light/80 text-sm">arenate.competitionsphere@gmail.com</span>
        </div>

        <div className="text-arenate-light/50 text-xs">
          © 2026 Arenate. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};