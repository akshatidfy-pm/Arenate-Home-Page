import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const rotateX = useTransform(scrollY, [0, 500], [5, 15]);
  const rotateY = useTransform(scrollY, [0, 500], [-10, -5]);
  
  const [imgError, setImgError] = useState(false);

  // Primary: User provided Drive Link
  const driveImage = "https://lh3.googleusercontent.com/d/1bXhSZNJ2usQo5WEbSHmvnsK3eGbZ09Ja";
  // Fallback: High quality SaaS Dashboard concept
  const fallbackImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop";

  return (
    <section className="relative pt-24 pb-8 md:pt-32 md:pb-12 overflow-hidden min-h-[95vh] flex items-center bg-slate-50 perspective-2000">
      
      {/* Dynamic Spatial Background Blobs */}
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 1000], [0, -200]) }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-arenate-green/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none" 
      />
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 1000], [0, 200]) }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-arenate-green/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 z-0 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="flex flex-col justify-center relative z-30">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-arenate-green/10 text-arenate-green text-sm font-bold mb-6 tracking-wide">
              The Evolution of Campus Culture
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.05] mb-8 [word-spacing:0.1em]">
             Empowering Colleges with <span className="text-arenate-green">Smarter</span> Event Management
            </h1>
            
            <p className="text-xl text-slate-600 max-w-xl mb-10 leading-relaxed">
              Bring students, faculty, and organizers onto one unified digital platform. Say goodbye to fragmented WhatsApp chaos and rebuild continuity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="https://calendly.com/arenate-competitionsphere/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-arenate-green hover:bg-green-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-green-500/25 transition-all hover:scale-105 active:scale-95"
              >
                Book a Live Demo <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Visual Content - Deep 3D Space */}
        <div className="relative flex items-center justify-center mt-12 lg:mt-0 preserve-3d">
           <div className="relative z-20 w-[110%] lg:w-[150%] lg:-mr-[25%]">
             <motion.div 
               style={{ 
                 y: y1,
                 rotateX: rotateX,
                 rotateY: rotateY,
                 scale: 1.05
               }}
               className="relative preserve-3d flex items-center justify-center"
             >
               {/* Directly render the image with shadow */}
               <div className="relative w-full aspect-[4/3] flex items-center justify-center rounded-3xl drop-shadow-[0_50px_80px_rgba(0,0,0,0.15)]">
                 <img 
                    src={!imgError ? driveImage : fallbackImage}
                    alt="Arenate Organizer Dashboard"
                    className="w-full h-full object-contain rounded-3xl"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                 />
               </div>
             </motion.div>
           </div>
        </div>

      </div>
    </section>
  );
};