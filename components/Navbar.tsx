import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ContactModal } from './ContactModal';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'The Problem', href: '#problem' },
    { name: 'The Solution', href: '#solution' },
    { name: 'Organizers', href: '#organizers' },
    { name: 'Students', href: '#students' },
    { name: 'About Us', href: '#about' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      try {
        window.history.pushState(null, '', href);
      } catch (e) {
        console.debug('History state update failed:', e);
      }
      window.dispatchEvent(new Event('hashchange'));
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-4 py-6 pointer-events-none">
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`mx-auto max-w-7xl pointer-events-auto transition-all duration-300 ${
            scrolled ? 'scale-95' : 'scale-100'
          }`}
        >
          <div className={`
            flex items-center justify-between px-6 py-3 rounded-2xl border transition-all duration-300
            ${scrolled 
              ? 'bg-white/80 backdrop-blur-lg border-slate-200/60 shadow-xl shadow-slate-200/20' 
              : 'bg-white/40 backdrop-blur-md border-white/60 shadow-lg'
            }
          `}>
            {/* Logo */}
            <a 
              href="#" 
              className="flex-shrink-0 group transition-transform hover:scale-[1.02] active:scale-95" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <Logo className="h-8" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-arenate-green rounded-xl hover:bg-white/50 transition-all cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Action */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => setShowModal(true)}
                className="bg-arenate-green hover:bg-green-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/40 active:scale-95"
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-slate-700 hover:bg-white/50 rounded-xl transition-colors" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full left-0 right-0 mt-4 mx-0 md:hidden bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="p-6 flex flex-col gap-4">
                  {links.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className="text-lg font-bold text-slate-700 hover:text-arenate-green transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <button 
                    onClick={() => { setIsOpen(false); setShowModal(true); }}
                    className="bg-arenate-green text-white px-6 py-4 rounded-2xl font-bold w-full text-center shadow-lg shadow-green-500/20"
                  >
                    Get in Touch
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
      
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};