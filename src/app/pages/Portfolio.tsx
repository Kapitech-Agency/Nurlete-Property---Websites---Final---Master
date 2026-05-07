import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MapPin, Sparkles, Filter } from 'lucide-react';

const projects = [
  { 
    id: "nava-terra", 
    title: "Nava Terra", 
    category: "Housing",
    categoryTag: "Premium Housing Cluster", 
    location: "Halong Atas, Ambon", 
    desc: "Our premium 2026 development. A modern housing cluster offering high-quality construction, thoughtful design, and exceptional stability.",
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
    <div className="pt-[160px] pb-0 w-full z-10 bg-[#F5F4F0] font-sans min-h-screen">
      
      {/* Header & Filter Bar - Wide Container */}
      <section className="px-[20px] md:px-[80px] max-w-[1600px] mx-auto mb-[80px] text-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-[12px] px-[20px] py-[10px] rounded-full bg-white border border-[#3C2A21]/20 mb-[32px] shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
        >
          <Sparkles size={14} className="text-[#3C2A21]" />
          <span className="text-[#000000] font-bold uppercase tracking-[0.3em] text-[11px]">Property Collection</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[44px] md:text-[72px] leading-[1] font-semibold text-[#000000] tracking-tight mb-[48px]"
        >
          Our Projects.<br/>
          <span className="text-[#000000]/30 font-medium tracking-tighter">View our developments.</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center bg-white border border-[#3C2A21]/20 rounded-full p-[8px] shadow-2xl overflow-x-auto max-w-full hide-scrollbar gap-[4px]"
        >
          {['All', 'Housing', 'Future Developments'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-[32px] py-[14px] min-h-[48px] rounded-full text-[15px] font-bold transition-all whitespace-nowrap ${
                filter === cat 
                ? 'bg-[#000000] text-white shadow-lg' 
                : 'text-[#000000]/50 hover:text-[#000000] hover:bg-[#3C2A21]/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Grid Adjustment - 3 columns on wide screens */}
      <section className="px-[20px] md:px-[80px] max-w-[1700px] mx-auto mb-[120px] w-full min-h-[400px]">
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[40px] w-full"
            >
              {filteredProjects.map((project, idx) => (
                <div key={project.id} className="group flex flex-col bg-white border border-[#3C2A21]/15 rounded-[48px] p-[24px] shadow-[0_24px_48px_rgba(0,0,0,0.03)] hover:-translate-y-4 hover:shadow-[0_48px_80px_rgba(0,0,0,0.08)] transition-all duration-700 overflow-hidden">
                  <div className="relative aspect-square rounded-[32px] overflow-hidden mb-[32px] bg-[#F5F4F0]">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105"
                    />
                    <div className="absolute top-[24px] left-[24px] bg-white/90 backdrop-blur-xl px-[20px] py-[10px] rounded-full flex items-center gap-[8px] shadow-xl border border-white/20">
                      <div className={`w-[8px] h-[8px] rounded-full animate-pulse ${project.status === 'Now Selling' ? 'bg-[#25D366]' : 'bg-[#EAB308]'}`} />
                      <span className="text-[#000000] font-bold text-[11px] uppercase tracking-widest">{project.status}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <span className="text-[#3C2A21] font-bold text-[11px] uppercase tracking-[0.2em] mb-[12px] opacity-70">{project.categoryTag}</span>
                    <h3 className="text-[28px] md:text-[32px] font-semibold text-[#000000] mb-[12px] tracking-tight">{project.title}</h3>
                    
                    <div className="flex items-center text-[#000000]/40 font-bold text-[14px] mb-[24px]">
                      <MapPin size={16} className="mr-[8px]" /> {project.location}
                    </div>

                    <p className="text-[#000000]/60 text-[16px] leading-[1.7] font-medium mb-[40px] line-clamp-3">
                      {project.desc}
                    </p>
                    
                    <div className="mt-auto flex gap-[12px]">
                      <Link to={`/project/${project.id}`} className="flex-1 inline-flex items-center justify-center bg-[#000000] text-white rounded-full py-[18px] font-bold text-[14px] hover:bg-[#3C2A21] transition-all shadow-lg active:scale-95">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <div className="w-full py-[120px] text-center">
              <h3 className="text-[24px] font-semibold">No projects found.</h3>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* Redesigned Bottom CTA */}
      <section className="px-[20px] md:px-[80px] max-w-[1600px] mx-auto mb-[120px] w-full">
        <div className="bg-[#3C2A21] rounded-[64px] p-[64px] md:p-[96px] text-center relative overflow-hidden shadow-3xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />
          <h2 className="text-[32px] md:text-[56px] leading-[1.1] font-semibold text-white tracking-tight mb-[24px] relative z-10">
            Real Estate Consultation
          </h2>
          <p className="text-white/60 text-[18px] md:text-[21px] leading-[1.6] font-medium max-w-2xl mx-auto mb-[56px] relative z-10">
            Connect with our team to discuss your property needs, whether you're looking for a new home or an investment opportunity.
          </p>
          <a href="https://wa.me/6282239415718" target="_blank" rel="noreferrer" className="inline-flex items-center gap-[12px] bg-white text-[#3C2A21] px-[48px] py-[22px] rounded-full font-bold text-[18px] hover:scale-105 active:scale-95 transition-all relative z-10 min-h-[64px] shadow-2xl">
            Schedule a Meeting <ArrowRight size={24} />
          </a>
        </div>
      </section>

    </div>
  );
}
