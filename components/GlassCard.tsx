import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", hoverEffect = false }) => {
  return (
    <motion.div 
      whileHover={hoverEffect ? { y: -5, boxShadow: "0 20px 40px -10px rgba(132, 204, 86, 0.2)" } : {}}
      className={`
        bg-white/40 backdrop-blur-md border border-white/60 
        shadow-lg rounded-2xl p-6 relative overflow-hidden
        ${className}
      `}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};