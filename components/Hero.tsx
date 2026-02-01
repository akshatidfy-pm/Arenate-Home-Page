import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const [imgError, setImgError] = useState(false);

  // Primary: User provided Drive Link
  const driveImage = "https://lh3.googleusercontent.com/d/1bXhSZNJ2usQo5WEbSHmvnsK3eGbZ09Ja";
  // Fallback: High quality SaaS Dashboard concept
  const fallbackImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop";

  return (
    <section className="relative pt-24 pb-8 md:pt-32 md:pb-12 overflow-hidden min-h-[90vh] flex items-center bg-slate-50">
      
      {/* Background Blobs - Green (arenate-green) instead of Teal */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-arenate-green/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-arenate-green/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* Text Content */}
        <div className="flex flex-col justify-center relative z-30 pointer-events-none lg:pointer-events-auto">
          {/* Added pointer-events-none/auto to ensure text is clickable even if image container overlaps */}
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 pointer-events-auto [word-spacing:0.2em]"
          >
           Empowering Colleges with Smarter Event Management
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-lg mb-1 pointer-events-auto"
          >
            Bring students, faculty, and organizers onto one unified digital platform. Say goodbye to fragmented WhatsApp chaos.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 pointer-events-auto"
          >
            <a 
              href="https://calendly.com/arenate-competitionsphere/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-arenate-green hover:bg-green-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-green-500/25 transition-all hover:scale-105"
            >
              Book a Live Demo <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>

        {/* Visual Content - Scaled Up */}
        <div className="relative perspective-1000 flex items-center justify-center mt-8 lg:mt-0">
           {/* 
             Using explicit width > 100% and negative margins to allow the image to be larger than its grid cell
             without using 'scale' which can sometimes cause blurry text or z-index issues.
           */}
           <div className="relative z-20 w-[120%] lg:w-[160%] lg:-mr-[30%] origin-center">
             <motion.div style={{ y: y1 }}>
               <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                 <img 
                    src={!imgError ? driveImage : fallbackImage}
                    alt="Arenate Organizer Dashboard"
                    className="w-full h-full object-contain drop-shadow-2xl"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                 />
               </div>
               
               {/* Soft glow behind the image */}
               <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-arenate-green/20 rounded-full blur-3xl" />
             </motion.div>
           </div>
        </div>

      </div>
    </section>
  );
};