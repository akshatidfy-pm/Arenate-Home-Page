import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Quote } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  
  // Direct link format for the provided Drive ID
  const founderImage = "https://lh3.googleusercontent.com/d/1R2JsUtzaGuvUmfbqFpM4J3GwSzJ5LRg6";
  const linkedinUrl = "https://www.linkedin.com/in/akshat-agarwal-ecell";

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden border-t border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-2/5 flex justify-center md:justify-end relative"
            >
                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-arenate-green/10 rounded-full blur-3xl -z-10" />
                <div className="relative group">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-3 group-hover:rotate-0 transition-transform duration-500 relative z-10 bg-slate-100">
                        {!imgError ? (
                            <img 
                                src={founderImage} 
                                alt="Akshat Agarwal" 
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                                onError={() => setImgError(true)}
                            />
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-4 text-center">
                                <span className="text-4xl mb-2">👤</span>
                                <span className="text-sm">Image Unavailable</span>
                            </div>
                        )}
                    </div>
                    {/* Name Card Overlay */}
                    <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-[200px] z-20 transform transition-transform group-hover:scale-105">
                        <h3 className="font-bold text-slate-900 text-lg leading-tight">Akshat Agarwal</h3>
                        <p className="text-arenate-green font-medium text-sm">Project Lead</p>
                    </div>
                    
                    {/* Background accent for card */}
                    <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-arenate-green/20 rounded-full blur-xl z-0" />
                </div>
            </motion.div>

            {/* Text Column */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-3/5 text-left"
            >
                <div className="inline-block bg-arenate-green/10 text-arenate-green font-bold px-4 py-1 rounded-full text-sm mb-6 uppercase tracking-wider">
                    Meet the Founder
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 relative leading-snug">
                    <span className="absolute -top-6 -left-4 md:-left-8 text-arenate-green/10 transform scale-150">
                        <Quote size={60} fill="currentColor" stroke="none" />
                    </span>
                    "Arenate is built to solve the pain points I experienced leading campus initiatives."
                </h2>

                <div className="space-y-4 text-slate-600 text-lg leading-relaxed mb-8">
                    <p>
                        I’m <span className="font-semibold text-slate-800">Akshat Agarwal</span>, an IIT Bombay Alumnus and former E-Cell Manager. 
                        Arenate is my mission to streamline campus events and bridge the sponsorship gap for student organizations.
                    </p>
                    <p>
                        The platform is live and open for collaboration. Let’s build a smarter campus together.
                    </p>
                </div>

                <a 
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0077b5] hover:bg-[#006396] text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1"
                >
                    <Linkedin size={20} />
                    Connect on LinkedIn
                </a>
            </motion.div>
        </div>
      </div>
    </section>
  );
};