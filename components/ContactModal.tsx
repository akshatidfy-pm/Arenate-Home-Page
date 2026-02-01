import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Calendar } from 'lucide-react';
import { ModalProps } from '../types';

export const ContactModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full overflow-hidden"
          >
            {/* Decorative background blob */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-arenate-green/20 rounded-full blur-3xl" />
            
            <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors z-20">
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold text-slate-900 mb-2 relative z-10">Get in Touch</h2>
            <p className="text-slate-600 mb-8 relative z-10">We'd love to hear from you. Choose how you'd like to connect.</p>
            
            <div className="space-y-4 relative z-10">
              <a 
                href="mailto:arenate.competitionsphere@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-arenate-green hover:bg-arenate-green/5 transition-all group text-left bg-slate-50/50"
              >
                <div className="w-12 h-12 bg-white text-arenate-green rounded-full flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Email Us</h3>
                  <p className="text-slate-500 text-xs break-all">arenate.competitionsphere@gmail.com</p>
                </div>
              </a>

              <div className="relative flex items-center justify-center py-2">
                <div className="h-px bg-slate-200 w-full absolute"></div>
                <span className="bg-white px-3 text-slate-400 text-xs font-medium relative z-10">OR</span>
              </div>

              <a 
                href="https://calendly.com/arenate-competitionsphere/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-arenate-green hover:bg-arenate-green/5 transition-all group text-left bg-slate-50/50"
              >
                <div className="w-12 h-12 bg-white text-arenate-green rounded-full flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Schedule a Meet</h3>
                  <p className="text-slate-500 text-xs">Book a 30min demo call via Calendly</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};