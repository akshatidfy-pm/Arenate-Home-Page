import React, { useState } from 'react';
import { Logo } from './Logo';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ContactModal } from './ContactModal';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const links = [
    { name: 'The Problem', href: '#problem' },
    { name: 'The Solution', href: '#solution' },
    { name: 'Organizers', href: '#organizers' },
    { name: 'Students', href: '#students' },
    { name: 'About Us', href: '#about' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without jumping
      try {
        window.history.pushState(null, '', href);
      } catch (e) {
        // Suppress SecurityError in sandboxed environments (e.g. preview iframes)
        console.debug('History state update failed (likely due to sandbox environment):', e);
      }
      
      // Dispatch event for other components (like TwoPaths) to detect change
      window.dispatchEvent(new Event('hashchange'));
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
      >
        <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-xl border border-white/50 rounded-full shadow-sm px-6 py-3 flex items-center justify-between">
          <a href="#" className="flex-shrink-0" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <Logo />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium text-slate-600 hover:text-arenate-green transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button 
              onClick={() => setShowModal(true)}
              className="bg-arenate-green hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg hover:shadow-green-200 inline-block cursor-pointer"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50 flex flex-col gap-4">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-lg font-medium text-slate-700 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => { setIsOpen(false); setShowModal(true); }}
              className="bg-arenate-green text-white px-6 py-3 rounded-xl font-bold w-full text-center block"
            >
              Get in Touch
            </button>
          </div>
        )}
      </motion.nav>
      
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};