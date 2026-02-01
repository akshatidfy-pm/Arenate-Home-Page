import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Users, Bell, Code2, Search, Zap, UserPlus, Handshake, School, LayoutDashboard, Rocket, ClipboardList, MousePointerClick } from 'lucide-react';
import { GlassCard } from './GlassCard';

export const TwoPaths: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'organizer' | 'student'>('organizer');

  useEffect(() => {
    const handleHashChange = () => {
      // Check if hash matches, but also guard against null/undefined in strange environments
      const hash = window.location.hash || '';
      if (hash.includes('students')) {
        setActiveTab('student');
      } else if (hash.includes('organizers')) {
        setActiveTab('organizer');
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const organizerFeatures = [
    { 
      title: "Sponsorship Opportunities", 
      desc: "Creates structured bridges with industry, enabling sponsorships and meaningful external engagement.", 
      icon: Handshake 
    },
    { 
      title: "College Space", 
      desc: "Create your own college ecosystem with multiple student organizations hosting and managing their events seamlessly.", 
      icon: School 
    },
    { 
      title: "Central Command Space", 
      desc: "Monitor ongoing events, track engagement, and access all information from a single interface.", 
      icon: LayoutDashboard 
    },
    { 
      title: "Hosting Made Simple", 
      desc: "Eliminating frequent website and form creation, defragment publicity, tracking and compounded growth.", 
      icon: Rocket 
    },
  ];

  const studentFeatures = [
    { 
      title: "College Space", 
      desc: "View all the opportunities categorised and consolidated on one platform.", 
      icon: School 
    },
    { 
      title: "One-Click Registration", 
      desc: "Reduces friction while registering, utilising existing profile data instantly.", 
      icon: MousePointerClick 
    },
    { 
      title: "In-Portal Team Discovery", 
      desc: "Create teams or discover and join teams looking for members.", 
      icon: UserPlus 
    },
    { 
      title: "Tracking", 
      desc: "Track registrations, event details, announcements and resources easily.", 
      icon: ClipboardList 
    },
  ];

  return (
    <section className="pt-16 pb-0 bg-slate-50 relative">
      <div id="organizers" className="absolute top-0 w-full h-0 opacity-0 pointer-events-none" />
      <div id="students" className="absolute top-0 w-full h-0 opacity-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Built for <span className="text-arenate-green">Everyone</span></h2>
           <p className="text-slate-500 mt-3">Whether you are hosting the future or building it.</p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1 rounded-full shadow-md border border-slate-200 flex relative">
            <button 
              onClick={() => {
                setActiveTab('organizer');
                try {
                  window.history.replaceState(null, '', '#organizers');
                } catch (e) {
                  // Ignore security errors in sandboxed environments
                }
              }}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all relative z-10 ${activeTab === 'organizer' ? 'text-white' : 'text-slate-500'}`}
            >
              For Organizers
            </button>
            <button 
              onClick={() => {
                setActiveTab('student');
                try {
                  window.history.replaceState(null, '', '#students');
                } catch (e) {
                  // Ignore security errors in sandboxed environments
                }
              }}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all relative z-10 ${activeTab === 'student' ? 'text-white' : 'text-slate-500'}`}
            >
              For Students
            </button>
            
            <motion.div 
              className="absolute top-1 bottom-1 bg-arenate-green rounded-full shadow-md"
              initial={false}
              animate={{ 
                left: activeTab === 'organizer' ? 4 : '50%', 
                width: 'calc(50% - 4px)' 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[300px] mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {(activeTab === 'organizer' ? organizerFeatures : studentFeatures).map((feature, idx) => (
                <div key={idx} className="h-full">
                  <GlassCard className="h-full bg-white shadow-xl border-slate-100 flex flex-col" hoverEffect>
                    <div className="w-12 h-12 rounded-2xl bg-arenate-green/10 flex items-center justify-center text-arenate-green mb-4 shrink-0">
                      <feature.icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                  </GlassCard>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};