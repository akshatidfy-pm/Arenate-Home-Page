import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Share2, MousePointer, Database, TrendingUp, LayoutDashboard, Search } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const items = [
    { 
      title: "Get Instant Listing", 
      desc: "Publish events instantly without building new sites or forms",
      icon: Zap 
    },
    { 
      title: "Integrated Publicity", 
      desc: "Centralized outreach across all channels from one dashboard",
      icon: Share2 
    },
    { 
      title: "Frictionless Entry", 
      desc: "One-click registration using existing profile data",
      icon: MousePointer 
    },
    { 
      title: "In-Portal Team Discovery", 
      desc: "Create team or discover and join teams looking for members",
      icon: Search 
    },
    { 
      title: "Centralized Hub", 
      desc: "Unified announcements and organized resource management",
      icon: LayoutDashboard 
    },
    { 
      title: "Data Continuity", 
      desc: "Complete history and user profiles preserved across all events",
      icon: Database 
    },
    { 
      title: "Compounding Success", 
      desc: "Existing user base and past efforts accelerate future event growth",
      icon: TrendingUp 
    },
  ];

  return (
    <section id="solution" className="py-12 bg-slate-50 relative overflow-hidden text-slate-900 min-h-auto lg:min-h-[600px] flex items-center justify-center scroll-mt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-arenate-green/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">With <span className="text-arenate-green">Arenate</span></h2>
          <p className="text-slate-700 mt-3 text-xl font-medium">The Virtuous Cycle of Event Management</p>
        </div>

        {/* The Cycle Layout - Desktop */}
        <div className="relative w-full max-w-[800px] aspect-square lg:aspect-[16/9] lg:h-[450px] mx-auto hidden lg:block">
          
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
             {/* Logo with drop shadow for light background */}
             <div className="flex items-center justify-center drop-shadow-2xl">
                <img 
                  src="https://lh3.googleusercontent.com/d/1WG8bsoVkEWP7T7J-zpXuHx3vQq74z9xJ" 
                  alt="Arenate Logo"
                  className="w-48 h-48 object-contain"
                  referrerPolicy="no-referrer"
                />
             </div>
          </div>

          {/* Items */}
          {items.map((item, index) => {
            const totalItems = items.length;
            // Distribute items in a circle
            const angleDeg = (index * 360) / totalItems - 90; // Start from top
            const angleRad = (angleDeg * Math.PI) / 180;
            const radius = 185; // Radius
            
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;

            // Alignment logic
            const isLeft = x < -40;
            const isRight = x > 40;
            
            let textAlign = 'text-center';
            let alignClass = 'items-center';
            
            if (isLeft) { 
              textAlign = 'text-right'; 
              alignClass = 'items-end'; 
            }
            if (isRight) { 
              textAlign = 'text-left'; 
              alignClass = 'items-start'; 
            }

            return (
              <motion.div
                key={index}
                className={`absolute top-1/2 left-1/2 flex flex-col ${alignClass} w-72 cursor-pointer z-10 hover:z-50`}
                style={{
                  x: x,
                  y: y,
                  // Adjusted offsets 
                  translateX: isLeft ? -280 : (isRight ? 20 : -144),
                  translateY: '-50%',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Icon Circle */}
                <div className={`w-14 h-14 bg-white rounded-full flex items-center justify-center text-arenate-green shadow-lg border border-slate-100 mb-3 relative z-30 transition-shadow hover:shadow-green-200/50 ${isLeft ? 'mr-0' : (isRight ? 'ml-0' : '')}`}>
                   <item.icon size={26} />
                </div>
                
                {/* Text Content - Reverted to smaller original sizes */}
                <div className={`${textAlign} pointer-events-auto bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-transparent hover:border-arenate-green/20 hover:shadow-lg transition-all`}>
                  <h3 className="font-bold text-sm text-slate-900 mb-1 leading-tight">{item.title}</h3>
                  <p className="text-xs text-slate-700 leading-snug font-semibold">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile/Tablet View (List) */}
        <div className="lg:hidden space-y-6 max-w-lg mx-auto">
           {items.map((item, index) => (
             <motion.div 
               key={index} 
               whileHover={{ scale: 1.03 }}
               className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer"
             >
               <div className="shrink-0 w-12 h-12 bg-arenate-green/10 rounded-full flex items-center justify-center text-arenate-green">
                 <item.icon size={24} />
               </div>
               <div>
                 <h3 className="font-bold text-base text-slate-900">{item.title}</h3>
                 <p className="text-slate-700 text-sm mt-1 font-medium">{item.desc}</p>
               </div>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
};
