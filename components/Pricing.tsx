import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const Pricing: React.FC = () => {
  return (
    <section className="pt-8 pb-16 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-arenate-dark rounded-3xl p-8 text-center text-white shadow-2xl overflow-hidden relative"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-arenate-green opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Completely <span className="text-arenate-green">Free of Cost</span></h2>
          <p className="text-arenate-light/80 text-base mb-6 max-w-2xl mx-auto">
            Arenate is built to empower campus innovation without financial barriers. We believe every college deserves world-class management tools.
          </p>
          
          <div className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter flex items-baseline justify-center gap-1">
            Rs 0<span className="text-2xl text-white/80 font-semibold tracking-normal">/forever</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 text-sm md:text-base">
             {["Unlimited Events", "Unlimited Students", "Full Feature Access", "24/7 Support"].map((item, i) => (
               <div key={i} className="flex items-center gap-2">
                 <div className="bg-arenate-green/20 p-1 rounded-full text-arenate-green">
                    <Check size={14} />
                 </div>
                 {item}
               </div>
             ))}
          </div>

          <a 
            href="https://calendly.com/arenate-competitionsphere/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-arenate-dark hover:bg-arenate-light px-8 py-3 rounded-xl font-bold text-lg transition-colors shadow-lg inline-block"
          >
            Start Your Transformation
          </a>
        </motion.div>

      </div>
    </section>
  );
};