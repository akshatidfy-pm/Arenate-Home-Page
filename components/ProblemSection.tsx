import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Users, FileX, Database, Repeat, MessageSquare, RefreshCw } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    { title: "Manual Setup", icon: FileX, desc: "Building custom forms and websites for every event from scratch" },
    { title: "Fragmented Publicity", icon: AlertTriangle, desc: "Managing WhatsApp, email, and social platforms separately without coordination" },
    { title: "High Friction & Manual Pairing", icon: Users, desc: "Students repeatedly re-enter data while organizers struggle with clunky spreadsheet matching" },
    { title: "Chaos & Resource Loss", icon: Database, desc: "Critical files disappear in chat history amidst scattered spreadsheets and uncoordinated channels" },
    { title: "The Hard Reset", icon: RefreshCw, desc: "Starting from zero for every new event, rebuilding what existed before" }
  ];

  return (
    <section id="problem" className="py-16 relative overflow-hidden bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-arenate-green font-bold tracking-wider uppercase text-sm">The Challenge</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">Traditional Event Workflow is <span className="text-red-500">Broken</span></h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-lg font-medium">
            Colleges are stuck in a chaotic loop of manual processes and lost data.
          </p>
        </div>

        {/* Flex container */}
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-center">
          
          {/* Visual Representation (3D Funnel) - Left Side */}
          {/* Reduced min-h to 400px to match tighter content */}
          <div className="order-1 lg:order-1 lg:w-1/2 flex justify-center relative min-h-[400px]">
            <div className="w-full h-full relative flex flex-col items-center justify-center">
                {/* 3D Segmented Funnel SVG - Compact Version */}
                {/* Reduced viewBox height and max-height */}
                <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet" className="w-full h-full max-h-[400px] drop-shadow-2xl overflow-visible">
                   <defs>
                     <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
                       <stop offset="0%" stopColor="#84cc56" />
                       <stop offset="100%" stopColor="#6da846" />
                     </linearGradient>
                     <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="0">
                       <stop offset="0%" stopColor="#fbbf24" />
                       <stop offset="100%" stopColor="#d97706" />
                     </linearGradient>
                     <linearGradient id="grad3" x1="0" y1="0" x2="1" y2="0">
                       <stop offset="0%" stopColor="#ef4444" />
                       <stop offset="100%" stopColor="#b91c1c" />
                     </linearGradient>
                   </defs>

                   {/* Step 1: Planning (Green) - Top Frustum - Compressed */}
                   <g transform="translate(0, 0)">
                      {/* Back face */}
                      <path d="M 40,30 L 360,30 L 310,130 L 90,130 Z" fill="url(#grad1)" opacity="0.9" />
                      {/* Top Rim */}
                      <ellipse cx="200" cy="30" rx="160" ry="16" fill="#eef7e8" opacity="0.6" stroke="#84cc56" strokeWidth="1" />
                      {/* Bottom Rim (Darker for depth) */}
                      <ellipse cx="200" cy="130" rx="110" ry="11" fill="#3f6226" opacity="0.3" />
                   </g>
                   
                   {/* Step 2: Process (Yellow) - Middle Frustum - Compressed */}
                   <g transform="translate(0, 0)">
                       <path d="M 90,140 L 310,140 L 260,240 L 140,240 Z" fill="url(#grad2)" opacity="0.95" />
                       <ellipse cx="200" cy="140" rx="110" ry="11" fill="#fef08a" opacity="0.4" stroke="#d97706" strokeWidth="0.5" />
                       <ellipse cx="200" cy="240" rx="60" ry="6" fill="#92400e" opacity="0.3" />
                   </g>

                   {/* Step 3: Chaos (Red) - Bottom Frustum - Compressed */}
                   <g transform="translate(0, 0)">
                       <path d="M 140,250 L 260,250 L 230,350 L 170,350 Z" fill="url(#grad3)" opacity="0.95" />
                       <ellipse cx="200" cy="250" rx="60" ry="6" fill="#fee2e2" opacity="0.4" stroke="#b91c1c" strokeWidth="0.5" />
                       {/* Exit Hole */}
                       <ellipse cx="200" cy="350" rx="30" ry="3" fill="#7f1d1d" opacity="0.8" />
                   </g>

                   {/* Animated Flow Particles - Updated Coordinates */}
                    <circle cx="200" cy="50" r="6" fill="white" filter="blur(1px)">
                        <animate attributeName="cy" from="40" to="350" dur="2s" repeatCount="indefinite" begin="0s"/>
                        <animate attributeName="opacity" values="0.9;0" dur="2s" repeatCount="indefinite" begin="0s"/>
                        <animate attributeName="r" values="6;2" dur="2s" repeatCount="indefinite" begin="0s"/>
                    </circle>
                    <circle cx="160" cy="50" r="4" fill="white" opacity="0.7">
                        <animate attributeName="cy" from="40" to="350" dur="2.3s" repeatCount="indefinite" begin="0.5s"/>
                        <animate attributeName="cx" values="160;190" dur="2.3s" repeatCount="indefinite" begin="0.5s"/>
                        <animate attributeName="opacity" values="0.7;0" dur="2.3s" repeatCount="indefinite" begin="0.5s"/>
                    </circle>
                    <circle cx="240" cy="50" r="5" fill="white" opacity="0.6">
                        <animate attributeName="cy" from="40" to="350" dur="1.8s" repeatCount="indefinite" begin="1.2s"/>
                        <animate attributeName="cx" values="240;210" dur="1.8s" repeatCount="indefinite" begin="1.2s"/>
                        <animate attributeName="opacity" values="0.6;0" dur="1.8s" repeatCount="indefinite" begin="1.2s"/>
                    </circle>
                </svg>

                {/* Floating Labels aligned with new compact 3D steps */}
                {/* Top ~ 20% */}
                <div className="absolute top-[20%] text-slate-800 font-bold text-lg bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full shadow-sm border border-slate-100">Planning</div>
                {/* Middle ~ 47% */}
                <div className="absolute top-[47%] text-slate-800 font-bold text-lg bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full shadow-sm border border-slate-100">High Friction</div>
                {/* Bottom ~ 75% */}
                <div className="absolute top-[75%] text-white font-bold text-lg bg-red-500/90 backdrop-blur-sm px-4 py-1 rounded-full shadow-lg border border-red-400">Total Chaos</div>
            </div>
          </div>

          {/* List of Pointers - Right Side */}
          {/* Reduced gap to match the compact funnel height */}
          <div className="order-2 lg:order-2 lg:w-1/2 flex flex-col justify-center py-1">
             <div className="flex flex-col gap-3">
                {problems.map((prob, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.2, x: 10, backgroundColor: "rgba(248, 250, 252, 0.9)" }}
                    transition={{ duration: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full flex items-center p-3 rounded-2xl cursor-pointer hover:shadow-md border border-transparent hover:border-slate-200 transition-all"
                  >
                     <div className="flex items-center gap-5 group">
                        <div className={`p-3 rounded-full shrink-0 transition-all duration-300 ${index === problems.length - 1 ? 'bg-red-100 text-red-500 group-hover:bg-red-200 group-hover:scale-110' : 'bg-slate-100 text-slate-500 group-hover:bg-arenate-green/10 group-hover:text-arenate-green group-hover:scale-110'}`}>
                           <prob.icon size={20} />
                        </div>
                        <div>
                          <h4 className={`font-bold text-sm transition-colors ${index === problems.length - 1 ? 'text-red-600' : 'text-slate-900 group-hover:text-arenate-green'}`}>
                            {prob.title}
                          </h4>
                          <p className="text-xs text-slate-600 leading-snug mt-1 font-medium group-hover:text-slate-800 transition-colors">
                            {prob.desc}
                          </p>
                        </div>
                     </div>
                  </motion.div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};