import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MapPin, Sparkles, Filter } from 'lucide-react';

const projects = [
  { 
    id: "nava-terra", 
    title: "Nava Terra", 
    category: "Housing",
    categoryTag: "Quality Housing Cluster", 
    location: "Halong Atas, Ambon", 
    desc: "Our available 2026 flagship project. A modern housing cluster offering high-quality construction, practical design, and safe living for your family.",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    status: "Now Selling"
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('filter');
    if (category && ['All', 'Housing', 'Future Developments'].includes(category)) {
      setFilter(category);
    }
  }, [location]);

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="pt-40 pb-0 w-full z-10 bg-[#F5F4F0] font-sans min-h-screen">
      
      {/* Header & Filter Bar - Wide Container */}
      <section className="w-full mb-20 text-center">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-[#3C2A21]/20 mb-8 shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
        >
          <Sparkles size={14} className="text-[#3C2A21]" />
          <span className="text-[#000000] font-bold uppercase tracking-[0.3em] text-[11px]">Property Collection</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-7xl leading-[1] font-semibold text-[#000000] tracking-tight mb-12"
        >
          Our Projects.<br/>
          <span className="text-[#000000]/30 font-medium tracking-tighter">View our developments.</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center bg-white border border-[#3C2A21]/20 rounded-full p-2 shadow-2xl overflow-x-auto max-w-full hide-scrollbar gap-1"
        >
          {['All', 'Housing', 'Future Developments'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3.5 min-h-[48px] rounded-full text-[15px] font-bold transition-all whitespace-nowrap ${
                filter === cat 
                ? 'bg-[#000000] text-white shadow-lg' 
                : 'text-[#000000]/50 hover:text-[#000000] hover:bg-[#3C2A21]/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
        </div>
      </section>

      {/* Grid Adjustment - 3 columns on wide screens */}
      <section className="w-full mb-32 min-h-[400px]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full"
            >
              {filteredProjects.map((project, idx) => (
                <div key={project.id} className="group flex flex-col bg-white border border-[#3C2A21]/15 rounded-[48px] p-6 shadow-[0_24px_48px_rgba(0,0,0,0.03)] hover:-translate-y-4 hover:shadow-[0_48px_80px_rgba(0,0,0,0.08)] transition-all duration-700 overflow-hidden">
                  <div className="relative aspect-square rounded-[32px] overflow-hidden mb-8 bg-[#F5F4F0]">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl px-5 py-2.5 rounded-full flex items-center gap-2 shadow-xl border border-white/20">
                      <div className={`w-2 h-2 rounded-full animate-pulse ${project.status === 'Now Selling' ? 'bg-[#25D366]' : 'bg-[#EAB308]'}`} />
                      <span className="text-[#000000] font-bold text-[11px] uppercase tracking-widest">{project.status}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <span className="text-[#3C2A21] font-bold text-[11px] uppercase tracking-[0.2em] mb-3 opacity-70">{project.categoryTag}</span>
                    <h3 className="text-[28px] md:text-[32px] font-semibold text-[#000000] mb-3 tracking-tight">{project.title}</h3>
                    
                    <div className="flex items-center text-[#000000]/40 font-bold text-[14px] mb-6">
                      <MapPin size={16} className="mr-2" /> {project.location}
                    </div>

                    <p className="text-[#000000]/60 text-base leading-[1.7] font-medium mb-10 line-clamp-3">
                      {project.desc}
                    </p>
                    
                    <div className="mt-auto flex gap-3">
                      <Link to={`/project/${project.id}`} className="flex-1 inline-flex items-center justify-center bg-[#000000] text-white rounded-full py-4.5 font-bold text-[14px] hover:bg-[#3C2A21] transition-all shadow-lg active:scale-95">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <div className="w-full py-32 text-center">
              <h3 className="text-2xl font-semibold">No projects found.</h3>
            </div>
          )}
        </AnimatePresence>
        </div>
      </section>

      {/* Redesigned Bottom CTA */}
      <section className="w-full mb-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-[#3C2A21] rounded-[64px] p-16 md:p-24 lg:p-32 text-center relative overflow-hidden shadow-3xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[1.1] font-semibold text-white tracking-tight mb-6 relative z-10">
            Real Estate Consultation
          </h2>
          <p className="text-white/60 text-lg md:text-xl lg:text-2xl leading-[1.6] font-medium max-w-2xl mx-auto mb-14 relative z-10">
            Connect with our team to discuss your property needs, whether you're looking for a new home or an investment opportunity.
          </p>
          <a href="https://wa.me/6282239415718" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-white text-[#3C2A21] px-12 py-5 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all relative z-10 min-h-[64px] shadow-2xl">
            Schedule a Meeting <ArrowRight size={24} />
          </a>
        </div>
        </div>
      </section>

    </div>
  );
}
